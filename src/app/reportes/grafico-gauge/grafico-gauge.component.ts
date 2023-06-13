import { Component } from '@angular/core';
import { ReportesService } from '../reportes.service';
import { FiltrosService } from '../filtros/filtros.service';

@Component({
  selector: 'app-grafico-gauge',
  templateUrl: './grafico-gauge.component.html',
  styleUrls: ['./grafico-gauge.component.scss']
})
export class GraficoGaugeComponent {
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
  legend: boolean = true;
  legendTitle: string = 'Rerefencias';
  showText: boolean = false;

  colorScheme = "vivid"
  // colorScheme = {
  //   domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  // };

  constructor(
    private reporteService:ReportesService,
    private filtrosService: FiltrosService
  ) {
    this.reporteService.obtenerMetasFranquicias().subscribe((resp:any)=>{
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
  }

}
