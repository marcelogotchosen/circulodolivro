import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemMembrosComponent } from './listagem-membros.component';

describe('ListagemMembrosComponent', () => {
  let component: ListagemMembrosComponent;
  let fixture: ComponentFixture<ListagemMembrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagemMembrosComponent]
    });
    fixture = TestBed.createComponent(ListagemMembrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
