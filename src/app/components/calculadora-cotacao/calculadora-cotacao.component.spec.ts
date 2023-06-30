import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraCotacaoComponent } from './calculadora-cotacao.component';

describe('CalculadoraCotacaoComponent', () => {
  let component: CalculadoraCotacaoComponent;
  let fixture: ComponentFixture<CalculadoraCotacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculadoraCotacaoComponent]
    });
    fixture = TestBed.createComponent(CalculadoraCotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
