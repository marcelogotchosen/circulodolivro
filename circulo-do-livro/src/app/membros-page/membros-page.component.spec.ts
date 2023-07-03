import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembrosPageComponent } from './membros-page.component';

describe('MembrosPageComponent', () => {
  let component: MembrosPageComponent;
  let fixture: ComponentFixture<MembrosPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MembrosPageComponent]
    });
    fixture = TestBed.createComponent(MembrosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
