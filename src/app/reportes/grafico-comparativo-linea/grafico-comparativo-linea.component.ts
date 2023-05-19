import { Component } from '@angular/core';
import { ReportesService } from '../reportes.service';
import { FiltrosService } from '../filtros/filtros.service';
import { Sucursales } from 'src/assets/sidebar/interfaces/sidebar';

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
  xAxisLabel: string = 'Días';
  yAxisLabel: string = 'Monto Consolidado';
  timeline: boolean = true;

  colorScheme = "vivid";

  filtroSucursal: string[] = [];

  constructor(private reporteService: ReportesService,
    private filtrosService: FiltrosService) {
    this.reporteService.obtenerComparativoMes().subscribe((resp: any) => {
      this.multi = resp;
      Object.assign(this, this.multi);
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

  ngOnInit(): void {
    
  }

}
