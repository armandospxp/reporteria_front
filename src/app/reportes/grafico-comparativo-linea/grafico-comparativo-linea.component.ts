import { Component, Input } from '@angular/core';
import { ReportesService } from '../reportes.service';
import { FiltrosService } from '../filtros/filtros.service';

@Component({
  selector: 'app-grafico-comparativo-linea',
  templateUrl: './grafico-comparativo-linea.component.html',
  styleUrls: ['./grafico-comparativo-linea.component.scss']
})
export class GraficoComparativoLineaComponent {
  multi!: any;
  @Input() tipoGrafico: any;
  view: any[] = [700, 300];

  customColors = [
    {
      name: 'verde',
      value: '#3BE007'
    },
    {
      name: 'azul',
      value: '#E03807'
    }
  ];

  // options
  legend: boolean = true;
  legendTitle: string = 'Rerefencias';
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = '';
  yAxisLabel: string = 'Monto Desembolsado';
  timeline: boolean = true;

  colorScheme = this.customColors;

  filtroSucursal: string[] = [];

  constructor(private reporteService: ReportesService,
    private filtrosService: FiltrosService) {
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
    if (this.tipoGrafico == 'comparativo-mes') {
      this.reporteService.obtenerComparativoMes().subscribe((resp: any) => {
        this.xAxisLabel = 'Meses';
        this.multi = resp;
        Object.assign(this, this.multi);
      });
    } else if (this.tipoGrafico == 'comparativo-dia') {
      this.reporteService.obtenerComparativoDia().subscribe((resp: any) => {
        this.xAxisLabel = 'Días';
        this.multi = resp;
        Object.assign(this, this.multi);
      })
    }
  }

}
