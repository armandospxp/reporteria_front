import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoComparativoLineaComponent } from './grafico-comparativo-linea.component';

describe('GraficoComparativoLineaComponent', () => {
  let component: GraficoComparativoLineaComponent;
  let fixture: ComponentFixture<GraficoComparativoLineaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoComparativoLineaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoComparativoLineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
