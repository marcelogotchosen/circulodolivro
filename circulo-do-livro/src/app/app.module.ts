import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroMembrosComponent } from './cadastro-membros/cadastro-membros.component';
import { CadastroLivrosComponent } from './cadastro-livros/cadastro-livros.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListagemMembrosComponent } from './listagem-membros/listagem-membros.component';
import { MembrosPageComponent } from './membros-page/membros-page.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { LivrosPageComponent } from './livros-page/livros-page.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroMembrosComponent,
    CadastroLivrosComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListagemMembrosComponent,
    MembrosPageComponent,
    LeftMenuComponent,
    LivrosPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
