import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoStartComponent } from './plano-start.component';

describe('PlanoStartComponent', () => {
  let component: PlanoStartComponent;
  let fixture: ComponentFixture<PlanoStartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanoStartComponent]
    });
    fixture = TestBed.createComponent(PlanoStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
