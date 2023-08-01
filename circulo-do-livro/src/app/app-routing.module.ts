import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CadastroLivrosComponent } from './cadastro-livros/cadastro-livros.component';
import { CadastroMembrosComponent } from './cadastro-membros/cadastro-membros.component';
import { MembrosPageComponent } from './membros-page/membros-page.component';
import { LivrosPageComponent } from './livros-page/livros-page.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'livros', component: LivrosPageComponent },
  { path: 'membros', component: MembrosPageComponent },
  { path: 'cadastro-membros', component: CadastroMembrosComponent },
  { path: 'cadastro-livros', component: CadastroLivrosComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

