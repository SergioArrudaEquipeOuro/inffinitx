import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoVelaComponent } from './grafico-vela.component';

describe('GraficoVelaComponent', () => {
  let component: GraficoVelaComponent;
  let fixture: ComponentFixture<GraficoVelaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficoVelaComponent]
    });
    fixture = TestBed.createComponent(GraficoVelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
