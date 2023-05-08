import { Component, EventEmitter, Output } from '@angular/core';
import { Sucursales } from 'src/assets/sidebar/interfaces/sidebar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  filtrarSucursal($event: Event) {
    throw new Error('Method not implemented.');
  }
  sucursalesFiltradas!: Sucursales[];
  async sucursales($event: Sucursales[]) {
    this.sucursalesFiltradas = $event;
    console.log(this.sucursalesFiltradas);
  }
  title = 'reporte_franquicias_front';
}
