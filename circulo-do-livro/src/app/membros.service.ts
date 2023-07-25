import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MembrosService {

  membrosObserver = new Subject();
  membrosObservable = this.membrosObserver.asObservable();

  constructor(private http : HttpClient) {
  }

  getMembros():Observable<any>{
    this.http.get(`${environment.api}/membros`).subscribe(membros=>{
      this.membrosObserver.next(membros);
    });
    return this.membrosObservable;
  }

  cadastraMembro(membro:any){
    membro.id = Math.floor(Math.random() * 1000);
    this.http.post(`${environment.api}/membros`, membro).subscribe(membro => {
      this.membrosObserver.next([membro]);
    });

  }
}


