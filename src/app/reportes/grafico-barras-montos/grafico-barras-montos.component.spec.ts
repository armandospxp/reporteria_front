import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoBarrasMontosComponent } from './grafico-barras-montos.component';

describe('GraficoBarrasMontosComponent', () => {
  let component: GraficoBarrasMontosComponent;
  let fixture: ComponentFixture<GraficoBarrasMontosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoBarrasMontosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoBarrasMontosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
