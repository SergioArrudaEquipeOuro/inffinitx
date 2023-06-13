import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoFlyComponent } from './grafico-fly.component';

describe('GraficoFlyComponent', () => {
  let component: GraficoFlyComponent;
  let fixture: ComponentFixture<GraficoFlyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficoFlyComponent]
    });
    fixture = TestBed.createComponent(GraficoFlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
