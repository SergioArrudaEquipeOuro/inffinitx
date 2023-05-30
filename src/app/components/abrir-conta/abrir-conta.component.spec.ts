import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbrirContaComponent } from './abrir-conta.component';

describe('AbrirContaComponent', () => {
  let component: AbrirContaComponent;
  let fixture: ComponentFixture<AbrirContaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbrirContaComponent]
    });
    fixture = TestBed.createComponent(AbrirContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
