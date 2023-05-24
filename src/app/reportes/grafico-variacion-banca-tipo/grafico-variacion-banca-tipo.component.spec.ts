/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GraficoVariacionBancaTipoComponent } from './grafico-variacion-banca-tipo.component';

describe('GraficoVariacionBancaTipoComponent', () => {
  let component: GraficoVariacionBancaTipoComponent;
  let fixture: ComponentFixture<GraficoVariacionBancaTipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoVariacionBancaTipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoVariacionBancaTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
