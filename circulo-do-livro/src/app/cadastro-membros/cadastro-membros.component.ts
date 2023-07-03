import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cadastro-membros',
  templateUrl: './cadastro-membros.component.html',
  styleUrls: ['./cadastro-membros.component.css']
})
export class CadastroMembrosComponent {
  @Output() membroCadastrado = new EventEmitter<any>();

  nome: string = '';
  telefone: string = '';
  endereco: string = '';

  cadastrarMembro(): void {
    const novoMembro = {
      nome: this.nome,
      telefone: this.telefone,
      endereco: this.endereco
    };

    this.membroCadastrado.emit(novoMembro);
    this.nome = '';
    this.telefone = '';
    this.endereco = '';
  }
}