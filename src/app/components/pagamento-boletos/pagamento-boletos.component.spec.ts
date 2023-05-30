import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoBoletosComponent } from './pagamento-boletos.component';

describe('PagamentoBoletosComponent', () => {
  let component: PagamentoBoletosComponent;
  let fixture: ComponentFixture<PagamentoBoletosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagamentoBoletosComponent]
    });
    fixture = TestBed.createComponent(PagamentoBoletosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
