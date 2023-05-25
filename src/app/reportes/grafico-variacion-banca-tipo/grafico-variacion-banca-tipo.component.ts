import { Component, Input, OnInit } from '@angular/core';
import { ReportesService } from '../reportes.service';
import { FiltrosService } from '../filtros/filtros.service';

@Component({
  selector: 'app-grafico-variacion-banca-tipo',
  templateUrl: './grafico-variacion-banca-tipo.component.html',
  styleUrls: ['./grafico-variacion-banca-tipo.component.css']
})
export class GraficoVariacionBancaTipoComponent implements OnInit {

  single!: any;
  view: any[] = [700, 400];

  filtroSucursal: string[] = [];

  @Input() anio: number | undefined;
  @Input() banca: number | undefined;



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

  constructor(private reporteService:ReportesService,
    private filtrosService: FiltrosService) { 
      this.reporteService.obtenerVariacionBancaTipo().subscribe((resp:any)=>{
        this.single = resp;
        Object.assign(this, this.single);
      })
    }

  ngOnInit() {
  }

}
