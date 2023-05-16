import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Servers } from 'src/app/config/api';


@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  private base_url = Servers.pruebas.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  obtenerCantidadOperaciones() {
    const url = this.base_url + '/cantidad-operaciones';
    console.log(url);
    return this.http.get(url);
  }

  obtenerCantidadOperacionesPost(data?: any) {
    const url = this.base_url + '/cantidad-operaciones';
    console.log(url);
    let body = data;
    return this.http.post(url, body);
  }

  obtenerSumaMontoOperaciones() {
    const url = this.base_url + '/suma-operaciones';
    console.log(url);
    return this.http.get(url);
  }

  obtenerSumaMontoOperacionesPost(data?: any) {
    const url = this.base_url + '/suma-operaciones';
    console.log(url);
    let body = data;
    return this.http.post(url, data);
  }

  obtenerComparativoSumaMontoOperaciones() {
    const url = this.base_url + '/comparativo-suma-operaciones';
    console.log(url);
    return this.http.get(url);
  }

  obtenerSumaOperacionesSucursal() {
    const url = this.base_url + '/suma-operaciones-sucursal';
    console.log(url);
    return this.http.get(url);
  }

  obtenerSumaOperacionesSucursalPost(data?: any) {
    const url = this.base_url + '/suma-operaciones-sucursal';
    console.log(url);
    let body = data;
    return this.http.post(url, data);
  }

}
