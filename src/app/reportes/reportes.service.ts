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

  obtenerComparativoMes(){
    const url = this.base_url + '/obtener-versus-mensual';
    console.log(url);
    return this.http.get(url);
  }
  
  obtenerComparativoDia(){
    const url = this.base_url + '/obtener-versus-dia';
    console.log(url);
    return this.http.get(url);
  }
  
  obtenerMetasFranquicias(){
    const url = this.base_url + '/obtener-metas-franquicias';
    console.log(url);
    return this.http.get(url);
  }
  
  obtenerSituacionFranquicias(){
    const url = this.base_url + '/obtener-situacion-franquicias';
    console.log(url);
    return this.http.get(url);
  }

  obtenerVariacionBancaTipo(data?:any){
    const url = this.base_url + '/obtener-variacion-banca-tipo';
    console.log(url);
    return this.http.post(url, data);
  }

  login(data:any){
    const url = this.base_url + '/login';
    console.log(url);
    return this.http.post(url, data);
  }

}
