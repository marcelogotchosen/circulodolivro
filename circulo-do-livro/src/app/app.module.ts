import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroMembrosComponent } from './cadastro-membros/cadastro-membros.component';
import { CadastroLivrosComponent } from './cadastro-livros/cadastro-livros.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroMembrosComponent,
    CadastroLivrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
