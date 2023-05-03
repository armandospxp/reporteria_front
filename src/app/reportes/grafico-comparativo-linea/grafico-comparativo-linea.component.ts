import { Component } from '@angular/core';
import { ReportesService } from '../reportes.service';

@Component({
  selector: 'app-grafico-comparativo-linea',
  templateUrl: './grafico-comparativo-linea.component.html',
  styleUrls: ['./grafico-comparativo-linea.component.scss']
})
export class GraficoComparativoLineaComponent {
  multi!: any;
  view: any[] = [700, 300];

  // options
  legend: boolean = true;
  legendTitle: string = 'Rerefencias';
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Mes';
  yAxisLabel: string = 'Monto Consolidado';
  timeline: boolean = true;

  colorScheme = "vivid";

  constructor(private reporteService:ReportesService) {
    //Object.assign(this, { multi });
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
    this.reporteService.obtenerComparativoSumaMontoOperaciones().subscribe((resp:any) =>{
     this.multi = resp;
     Object.assign(this, this.multi);
   });
   }

}
