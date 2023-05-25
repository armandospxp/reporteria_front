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
  data:any;
  view: any[] = [700, 400];

  filtroSucursal: string[] = [];

  @Input() anterior: any = null;
  @Input() banca!: number;
  @Input() label!: string;



  // options
  showXAxis: boolean = false;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = false;
  yAxisLabel: string = this.label;
  showYAxisLabel: boolean = true;
  showDataLabel: boolean = true;

  colorScheme = "vivid"

  constructor(private reporteService:ReportesService,
    private filtrosService: FiltrosService) {
    }

  ngOnInit() {
    console.log(this.label)
    this.data = {"tipo_banca":this.banca, "anterior":this.anterior} 
    this.yAxisLabel = this.label;
    this.reporteService.obtenerVariacionBancaTipo(this.data).subscribe((resp:any)=>{
      this.single = resp;
      Object.assign(this, this.single);
    });
  }


}
