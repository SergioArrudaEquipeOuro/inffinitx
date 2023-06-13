import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoPromocionalComponent } from './plano-promocional.component';

describe('PlanoPromocionalComponent', () => {
  let component: PlanoPromocionalComponent;
  let fixture: ComponentFixture<PlanoPromocionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanoPromocionalComponent]
    });
    fixture = TestBed.createComponent(PlanoPromocionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
