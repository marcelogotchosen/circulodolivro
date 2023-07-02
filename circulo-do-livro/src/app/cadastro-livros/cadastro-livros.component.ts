import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-livros',
  templateUrl: './cadastro-livros.component.html',
  styleUrls: ['./cadastro-livros.component.css']
})
export class CadastroLivrosComponent {
  mensagem: string = "";

  mostrarMensagem() {
    this.mensagem = "Cadastrando!";
  }
}
