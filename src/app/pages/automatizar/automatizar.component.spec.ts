import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomatizarComponent } from './automatizar.component';

describe('AutomatizarComponent', () => {
  let component: AutomatizarComponent;
  let fixture: ComponentFixture<AutomatizarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutomatizarComponent]
    });
    fixture = TestBed.createComponent(AutomatizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
