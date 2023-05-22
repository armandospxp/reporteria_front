import { Component } from '@angular/core';
import { ReportesService } from '../reportes.service';
import { FiltrosService } from '../filtros/filtros.service';

@Component({
  selector: 'app-grafico-barras-montos',
  templateUrl: './grafico-barras-montos.component.html',
  styleUrls: ['./grafico-barras-montos.component.scss']
})
export class GraficoBarrasMontosComponent {

  dato_montos:any;
  vista: any[] = [700, 400];

  filtroSucural:string[]= [];

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

  constructor(private reporteService: ReportesService,
    private filtrosService: FiltrosService){
    }

}
