import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosSupervisoresComponent } from './filtros-supervisores.component';

describe('FiltrosSupervisoresComponent', () => {
  let component: FiltrosSupervisoresComponent;
  let fixture: ComponentFixture<FiltrosSupervisoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrosSupervisoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltrosSupervisoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
