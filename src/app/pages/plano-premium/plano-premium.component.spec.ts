import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoPremiumComponent } from './plano-premium.component';

describe('PlanoPremiumComponent', () => {
  let component: PlanoPremiumComponent;
  let fixture: ComponentFixture<PlanoPremiumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanoPremiumComponent]
    });
    fixture = TestBed.createComponent(PlanoPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
