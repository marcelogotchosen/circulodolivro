import { Component } from '@angular/core';
import { LivrosService } from '../livros.service';

interface LivroInterface{
  id : number;
  titulo:string;
  autor:string;
  tema:string;
}


@Component({
  selector: 'app-livros-page',
  templateUrl: './livros-page.component.html',
  styleUrls: ['./livros-page.component.css']
})
export class LivrosPageComponent {
  livros: LivroInterface[] = [];
  mostrarLivrosPage: boolean = false;
  mostrarLivrosModal: boolean = false;

  constructor(private livrosService:LivrosService) {}

  ngOnInit(): void {
    this.livrosService.getLivros().subscribe(livros=>{
      this.livros = [...this.livros,...livros];
      console.log('chegou' , livros);
      this.mostrarLivrosPage = true;
      this.mostrarLivrosModal = false;
    })
  }

  adicionarLivro(novoLivro: LivroInterface): void {

    this.livrosService.cadastraLivro(novoLivro);
  }

}
