import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPlanosComponent } from './header-planos.component';

describe('HeaderPlanosComponent', () => {
  let component: HeaderPlanosComponent;
  let fixture: ComponentFixture<HeaderPlanosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderPlanosComponent]
    });
    fixture = TestBed.createComponent(HeaderPlanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
