import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'circulo-do-livro';
  nome: string = "Marcelo Nascimento";
   listaMembros: any[] = [];

  membroCadastrado(membro: any) {
    this.listaMembros.push(membro);
  }

    incluirNovoMembro() {
    // Lógica para inclusão de novo membro
  }
}
