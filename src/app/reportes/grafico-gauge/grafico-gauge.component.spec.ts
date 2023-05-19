import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoGaugeComponent } from './grafico-gauge.component';

describe('GraficoGaugeComponent', () => {
  let component: GraficoGaugeComponent;
  let fixture: ComponentFixture<GraficoGaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoGaugeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
