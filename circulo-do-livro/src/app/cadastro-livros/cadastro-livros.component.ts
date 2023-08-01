import { Component, EventEmitter, Output  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-livros',
  templateUrl: './cadastro-livros.component.html',
  styleUrls: ['./cadastro-livros.component.css']
})

export class CadastroLivrosComponent {
  @Output() livroCadastrado = new EventEmitter<any>();

  livroForm: FormGroup;

  constructor() {
    this.livroForm = new FormGroup({
      titulo: new FormControl(''),
      autor: new FormControl(''),
      tema: new FormControl('')
    });
  }

  cadastrarLivro() {
    if (this.livroForm.invalid) {
      this.markFieldsAsTouched();
      return;
    }

    const novoLivro = {
      titulo: this.livroForm.get('titulo')?.value,
      autor: this.livroForm.get('autor')?.value,
      tema: this.livroForm.get('tema')?.value
    };


    const livros = this.getLivrosFromStorage();
    livros.push(novoLivro);
    this.saveLivrosToStorage(livros);

    this.livroCadastrado.emit(novoLivro);
    this.livroForm.reset();
  }

  markFieldsAsTouched() {
    Object.values(this.livroForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }

  isInvalidField(fieldName: string) {
    const control = this.livroForm.get(fieldName);
    return control?.invalid && control?.touched;
  }

  getLivrosFromStorage(): any[] {
    const livrosString = localStorage.getItem('livros');
    return livrosString ? JSON.parse(livrosString) : [];
  }

  saveLivrosToStorage(livros: any[]) {
    localStorage.setItem('livros', JSON.stringify(livros));
  }
}