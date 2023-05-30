import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoBasicComponent } from './plano-basic.component';

describe('PlanoBasicComponent', () => {
  let component: PlanoBasicComponent;
  let fixture: ComponentFixture<PlanoBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanoBasicComponent]
    });
    fixture = TestBed.createComponent(PlanoBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
