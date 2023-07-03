import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-membros',
  templateUrl: './cadastro-membros.component.html',
  styleUrls: ['./cadastro-membros.component.css']
})
export class CadastroMembrosComponent {
  @Output() membroCadastrado = new EventEmitter<any>();

  membroForm: FormGroup;

  constructor() {
    this.membroForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      telefone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{3}-[0-9]{4}-[0-9]{4}')]),
      endereco: new FormControl('', Validators.required)
    });
  }

  cadastrarMembro() {
    if (this.membroForm.invalid) {
      this.markFieldsAsTouched();
      return;
    }

    const novoMembro = {
      nome: this.membroForm.get('nome')?.value,
      telefone: this.membroForm.get('telefone')?.value,
      endereco: this.membroForm.get('endereco')?.value
    };

    // Armazenar o novo membro no Web Storage
    const membros = this.getMembrosFromStorage();
    membros.push(novoMembro);
    this.saveMembrosToStorage(membros);

    this.membroCadastrado.emit(novoMembro);
    this.membroForm.reset();
  }

  markFieldsAsTouched() {
    Object.values(this.membroForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }

  isInvalidField(fieldName: string) {
    const control = this.membroForm.get(fieldName);
    return control?.invalid && control?.touched;
  }

  getMembrosFromStorage(): any[] {
    const membrosString = localStorage.getItem('membros');
    return membrosString ? JSON.parse(membrosString) : [];
  }

  saveMembrosToStorage(membros: any[]) {
    localStorage.setItem('membros', JSON.stringify(membros));
  }
}
