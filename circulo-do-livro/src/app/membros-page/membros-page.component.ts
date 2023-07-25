import { Component, OnInit } from '@angular/core';
import { MembrosService } from '../membros.service';

interface MembroInterface{
  id : number;
  nome:string;
  endereco:string;
  telefone:string;
}

@Component({
  selector: 'app-membros-page',
  templateUrl: './membros-page.component.html',
  styleUrls: ['./membros-page.component.css']
})
export class MembrosPageComponent implements OnInit{
  membros: MembroInterface[] = [];
  mostrarMembrosPage: boolean = false;
  mostrarMembrosModal: boolean = false;

  constructor(private membrosService:MembrosService) {}

  ngOnInit(): void {
    this.membrosService.getMembros().subscribe(membros=>{
      // criei um terceiro array para concatenar membros e this.membros
      this.membros = [...this.membros,...membros];
      console.log('chegou' , membros);
      this.mostrarMembrosPage = true;
      this.mostrarMembrosModal = false;
    })
  }

  adicionarMembro(novoMembro: MembroInterface): void {
    // this.membros.push(novoMembro);
    this.membrosService.cadastraMembro(novoMembro);
  }
}