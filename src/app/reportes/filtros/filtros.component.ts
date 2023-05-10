import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Sucursales } from 'src/assets/sidebar/interfaces/sidebar';
import { FiltrosService } from './filtros.service';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {

  sucursalesFiltradas!: Sucursales[];
  @Output()
  datosFiltrados: EventEmitter<Sucursales[]> = new EventEmitter();

filtrar() {
  this.sucursalesFiltradas = this.sucursales.filter(opcion => opcion.seleccionado);
  //console.log(this.sucursalesFiltradas);
  this.emitDatosFiltro(this.sucursalesFiltradas)
}

private emitDatosFiltro(data: Sucursales[]): void {
  this.datosFiltrados.emit(data);
}

  filtroSeleccionado:any = []
  
  sucursales!:Sucursales[];

  constructor(
    private filtrosService:FiltrosService,
  ){
  }

  ngOnInit():void{
    this.filtrosService.obtenerSucursales().subscribe((resp:any)=>{
      // console.log(resp);
      this.sucursales = resp;
    });
  }

  checkValue(event: any){
    console.log(event);
 }
}
