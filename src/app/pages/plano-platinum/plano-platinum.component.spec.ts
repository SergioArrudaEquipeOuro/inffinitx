import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoPlatinumComponent } from './plano-platinum.component';

describe('PlanoPlatinumComponent', () => {
  let component: PlanoPlatinumComponent;
  let fixture: ComponentFixture<PlanoPlatinumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanoPlatinumComponent]
    });
    fixture = TestBed.createComponent(PlanoPlatinumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
