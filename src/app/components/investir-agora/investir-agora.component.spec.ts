import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestirAgoraComponent } from './investir-agora.component';

describe('InvestirAgoraComponent', () => {
  let component: InvestirAgoraComponent;
  let fixture: ComponentFixture<InvestirAgoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestirAgoraComponent]
    });
    fixture = TestBed.createComponent(InvestirAgoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
