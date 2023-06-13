import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoPromoComponent } from './plano-promo.component';

describe('PlanoPromoComponent', () => {
  let component: PlanoPromoComponent;
  let fixture: ComponentFixture<PlanoPromoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanoPromoComponent]
    });
    fixture = TestBed.createComponent(PlanoPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
