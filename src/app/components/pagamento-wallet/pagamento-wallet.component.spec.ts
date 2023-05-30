import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoWalletComponent } from './pagamento-wallet.component';

describe('PagamentoWalletComponent', () => {
  let component: PagamentoWalletComponent;
  let fixture: ComponentFixture<PagamentoWalletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagamentoWalletComponent]
    });
    fixture = TestBed.createComponent(PagamentoWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
