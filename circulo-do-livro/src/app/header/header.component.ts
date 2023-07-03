import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    title = 'circulo-do-livro';
    nome: string = "Marcelo Nascimento";
}
