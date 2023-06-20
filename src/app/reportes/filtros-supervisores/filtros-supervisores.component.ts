import { Component } from '@angular/core';
import { FiltrosService } from '../filtros/filtros.service';
import { Sucursales } from '../interfaces/sucursales';

@Component({
  selector: 'app-filtros-supervisores',
  templateUrl: './filtros-supervisores.component.html',
  styleUrls: ['./filtros-supervisores.component.scss']
})
export class FiltrosSupervisoresComponent {
  supervisoresFiltrados!: Sucursales[];

  filtrar() {
    this.supervisoresFiltrados = this.supervisores.filter(opcion => opcion.seleccionado);
    this.filtrosService.emitDatosFiltro(this.supervisoresFiltrados);
  }
  
    filtroSeleccionado:any = []
    
    supervisores!:Sucursales[];
  
    constructor(
      private filtrosService:FiltrosService
    ){
    }
  
    ngOnInit():void{
      // this.filtrosService.fechaFiltrada.subscribe(()=>{
      //   this.filtrosService.obtenerSucursales().subscribe((resp:any)=>{
      //     this.sucursales = resp;
      //   });
      // })
      this.filtrosService.obtenerSupervisores().subscribe((resp:any)=>{
        this.supervisores = resp;
        console.log(resp);
      });
    }
  
    checkValue(event: any){
      console.log(event);
   }
}
