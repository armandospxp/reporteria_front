import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Servers } from 'src/app/config/api';
import { Sucursales } from './interfaces/sidebar';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  
  private base_url = Servers.pruebas.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  obtenerSucursales(){
    const url = this.base_url + '/obtener-sucursales';
    console.log(url);
    return this.http.get<Sucursales>(url);
  }

}
