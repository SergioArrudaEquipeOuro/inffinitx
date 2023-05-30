import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoTedComponent } from './pagamento-ted.component';

describe('PagamentoTedComponent', () => {
  let component: PagamentoTedComponent;
  let fixture: ComponentFixture<PagamentoTedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagamentoTedComponent]
    });
    fixture = TestBed.createComponent(PagamentoTedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
