import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoTreeComponent } from './grafico-tree.component';

describe('GraficoTreeComponent', () => {
  let component: GraficoTreeComponent;
  let fixture: ComponentFixture<GraficoTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
