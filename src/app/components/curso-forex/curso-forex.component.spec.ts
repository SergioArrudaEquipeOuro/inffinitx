import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoForexComponent } from './curso-forex.component';

describe('CursoForexComponent', () => {
  let component: CursoForexComponent;
  let fixture: ComponentFixture<CursoForexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursoForexComponent]
    });
    fixture = TestBed.createComponent(CursoForexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
