import { Component, Input } from '@angular/core';
import { ReportesService } from '../reportes.service';
import { FiltrosService } from '../filtros/filtros.service';
import { Sucursales } from 'src/app/reportes/interfaces/sucursales';

@Component({
  selector: 'app-grafico-lineas',
  templateUrl: './grafico-lineas.component.html',
  styleUrls: ['./grafico-lineas.component.scss']
})
export class GraficoLineasComponent {
  multi!: any;
  view: any[] = [700, 300];

  filtroSucursal: string[] = [];

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
  yAxisLabel: string = 'Monto Desembolsado';
  timeline: boolean = true;

  colorScheme = "vivid";

  @Input() datosFiltrados: any;

  constructor(private reporteService: ReportesService,
    private filtrosService: FiltrosService) {
    this.reporteService.obtenerSumaMontoOperaciones().subscribe((resp: any) => {
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
    this.filtrosService.fechaFiltrada.subscribe((data:any)=>{
      this.reporteService.obtenerSumaMontoOperacionesPost(data).subscribe((resp:any)=>{
        this.multi = resp;
        Object.assign(this, this.multi);
      })
    });
    this.filtrosService.datosFiltrados.subscribe((data: Sucursales[]) => {
      this.filtroSucursal = [];
      data.forEach((i: Sucursales) => {
        this.filtroSucursal.push(i.name);
      });
      console.log(this.filtroSucursal)
      this.reporteService.obtenerSumaMontoOperaciones().subscribe((resp: any) => {
        this.multi = resp.filter((valor: Sucursales) => this.filtroSucursal.includes(valor.name));
        Object.assign(this, this.multi);
      });
    })
  }
}
