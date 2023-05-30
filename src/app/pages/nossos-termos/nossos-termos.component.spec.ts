import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NossosTermosComponent } from './nossos-termos.component';

describe('NossosTermosComponent', () => {
  let component: NossosTermosComponent;
  let fixture: ComponentFixture<NossosTermosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NossosTermosComponent]
    });
    fixture = TestBed.createComponent(NossosTermosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
