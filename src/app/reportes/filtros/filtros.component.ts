import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Sucursales } from 'src/app/reportes/interfaces/sucursales';
import { FiltrosService } from './filtros.service';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {

  sucursalesFiltradas!: Sucursales[];

filtrar() {
  this.sucursalesFiltradas = this.sucursales.filter(opcion => opcion.seleccionado);
  this.filtrosService.emitDatosFiltro(this.sucursalesFiltradas);
}

  filtroSeleccionado:any = []
  
  sucursales!:Sucursales[];

  constructor(
    private filtrosService:FiltrosService
  ){
  }

  ngOnInit():void{
    this.filtrosService.fechaFiltrada.subscribe(()=>{
      this.filtrosService.obtenerSucursales().subscribe((resp:any)=>{
        this.sucursales = resp;
      });
    })
    this.filtrosService.obtenerSucursales().subscribe((resp:any)=>{
      this.sucursales = resp;
    });
  }

  checkValue(event: any){
    console.log(event);
 }
}
