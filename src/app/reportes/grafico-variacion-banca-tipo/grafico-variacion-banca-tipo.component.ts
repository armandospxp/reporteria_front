import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-variacion-banca-tipo',
  templateUrl: './grafico-variacion-banca-tipo.component.html',
  styleUrls: ['./grafico-variacion-banca-tipo.component.css']
})
export class GraficoVariacionBancaTipoComponent implements OnInit {

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
  showDataLabel: boolean = true;

  colorScheme = "vivid"

  constructor() { }

  ngOnInit() {
  }

}
