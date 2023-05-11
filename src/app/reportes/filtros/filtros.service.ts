import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Servers } from 'src/app/config/api';
import { Sucursales } from 'src/assets/sidebar/interfaces/sidebar';

@Injectable({
  providedIn: 'root'
})
export class FiltrosService {

  private base_url = Servers.pruebas.baseUrl;
  @Output()
  datosFiltrados: EventEmitter<Sucursales[]> = new EventEmitter();
  fechaFiltrada: EventEmitter<any> = new EventEmitter();

  constructor(
    private http: HttpClient
  ) { }

  obtenerSucursales(){
    const url = this.base_url + '/obtener-sucursales';
    console.log(url);
    return this.http.get<Sucursales>(url);
  }

  emitDatosFiltro(data: Sucursales[]): void {
    this.datosFiltrados.emit(data);
  }

  emitirDatosFecha(data:any){
    this.fechaFiltrada.emit(data);
  }

}
