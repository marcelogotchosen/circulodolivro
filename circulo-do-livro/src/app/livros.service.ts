import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  livrosObserver = new Subject();
  livrosObservable = this.livrosObserver.asObservable();

  constructor(private http : HttpClient) { }

  getLivros():Observable<any>{
    this.http.get(`${environment.api}/livros`).subscribe(livros=>{
      this.livrosObserver.next(livros);
    });
    return this.livrosObservable;
  }

  cadastraLivro(livro:any){
    livro.id = Math.floor(Math.random() * 1000);
    this.http.post(`${environment.api}/livros`, livro).subscribe(livro => {
      this.livrosObserver.next([livro]);
    });

  }
}
