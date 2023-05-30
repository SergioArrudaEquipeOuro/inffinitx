import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestirComponent } from './investir.component';

describe('InvestirComponent', () => {
  let component: InvestirComponent;
  let fixture: ComponentFixture<InvestirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestirComponent]
    });
    fixture = TestBed.createComponent(InvestirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
