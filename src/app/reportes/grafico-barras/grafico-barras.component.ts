import { Component, Input } from '@angular/core';
import { ReportesService } from '../reportes.service';
import { Sucursales } from 'src/assets/sidebar/interfaces/sidebar';
import { FiltrosService } from '../filtros/filtros.service';


@Component({
  selector: 'app-grafico-barras',
  templateUrl: './grafico-barras.component.html',
  styleUrls: ['./grafico-barras.component.scss'],
})
export class GraficoBarrasComponent {
  single!: any;
  view: any[] = [700, 400];

  filtroSucursal:string[]=[];


  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Sucursales';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Cantidad';

  colorScheme = "vivid"
  // colorScheme = {
  //   domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  // };

  constructor(
    private reporteService:ReportesService,
    private filtrosService: FiltrosService
  ) {
    this.reporteService.obtenerCantidadOperaciones().subscribe((resp:any)=>{
      this.single = resp;
      Object.assign(this, this.single);
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
    })
   
  }

}
