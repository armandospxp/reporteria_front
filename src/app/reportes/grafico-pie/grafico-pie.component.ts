import { Component } from '@angular/core';
import { ReportesService } from '../reportes.service';
import { FiltrosService } from '../filtros/filtros.service';
import { Sucursales } from 'src/assets/sidebar/interfaces/sidebar';

@Component({
  selector: 'app-grafico-pie',
  templateUrl: './grafico-pie.component.html',
  styleUrls: ['./grafico-pie.component.scss']
})
export class GraficoPieComponent {
  single!: any;
  view: [number, number] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = true;

  colorScheme = "vivid";

  filtroSucursal:string[]=[];

  constructor(
    private reporteService:ReportesService,
    private filtrosService:FiltrosService
  ) {
    this.reporteService.obtenerCantidadOperaciones().subscribe((resp:any)=>{
      this.single = resp
      Object.assign(this.single);
    });
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  ngOnInit():void{
    this.filtrosService.datosFiltrados.subscribe((data:Sucursales[])=>{
      this.filtroSucursal = [];
      //console.log(data);
      data.forEach((i:Sucursales)=>{
        //console.log(i.name);
        this.filtroSucursal.push(i.name);
      });
      console.log(this.filtroSucursal);
      this.reporteService.obtenerCantidadOperaciones().subscribe((resp:any) =>{
        this.single = resp.filter((valor: Sucursales)=>this.filtroSucursal.includes(valor.name));
        //console.log(this.single);
        Object.assign(this, this.single);
      });
    });
  }
}
