import { Component } from '@angular/core';

@Component({
  selector: 'app-membros-page',
  templateUrl: './membros-page.component.html',
  styleUrls: ['./membros-page.component.css']
})
export class MembrosPageComponent {
  membros: any[] = [];
  mostrarMembrosPage: boolean = false;
  mostrarMembrosModal: boolean = true;

  adicionarMembro(novoMembro: any): void {
    this.membros.push(novoMembro);
    this.mostrarMembrosPage = true;
    this.mostrarMembrosModal = false;
  }
}