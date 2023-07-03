import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem-membros',
  templateUrl: './listagem-membros.component.html',
  styleUrls: ['./listagem-membros.component.css']
})
export class ListagemMembrosComponent {
  @Input() membros: any[] = [];
  @Output() adicionarNovoMembro = new EventEmitter<void>();

  constructor(private router: Router) {}

  adicionarMembro(): void {
    this.adicionarNovoMembro.emit();
    this.router.navigate(['/cadastro-membros']);
  }
}