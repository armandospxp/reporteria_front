import { Component, EventEmitter, Output } from '@angular/core';
import { Sucursales } from 'src/app/reportes/interfaces/sucursales';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sucursalesFiltradas!: Sucursales[];
  async sucursales($event: Sucursales[]) {
    this.sucursalesFiltradas = $event;
    console.log(this.sucursalesFiltradas);
  }
  title = 'reporte_franquicias_front';
}
