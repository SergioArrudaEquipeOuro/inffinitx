import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoPromoPagamentoComponent } from './plano-promo-pagamento.component';

describe('PlanoPromoPagamentoComponent', () => {
  let component: PlanoPromoPagamentoComponent;
  let fixture: ComponentFixture<PlanoPromoPagamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanoPromoPagamentoComponent]
    });
    fixture = TestBed.createComponent(PlanoPromoPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
