import { Component } from '@angular/core';
import { ReportesService } from '../reportes.service';
import { FiltrosService } from '../filtros/filtros.service';
import { Sucursales } from 'src/assets/sidebar/interfaces/sidebar';

@Component({
  selector: 'app-grafico-tree',
  templateUrl: './grafico-tree.component.html',
  styleUrls: ['./grafico-tree.component.scss']
})
export class GraficoTreeComponent {
  single!: any;
  view: any[] = [700, 400];

  // options
  gradient: boolean = false;
  animations: boolean = true;
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  showLegend: boolean = false;
  showXAxisLabel: boolean = false;
  yAxisLabel: string = 'Sucursales';
  showYAxisLabel: boolean = false;
  xAxisLabel: string = 'Monto Desembolsado';
  showDataLabel: boolean = true;

  colorScheme = "vivid";

  filtroSucursal: string[] = [];
  fechaFiltrada: any;

  constructor(private reporteService: ReportesService,
    private filtrosService: FiltrosService) {
    this.reporteService.obtenerSumaOperacionesSucursal().subscribe((resp: any) => {
      this.single = resp;
      Object.assign(this, this.single);
    });
  }

  onSelect(event: any) {
    console.log(event);
  }

  labelFormatting(c: { label: any; }) {
    return `${(c.label)}`;
  }
//obtenerSumaOperacionesSucursalPost
ngOnInit(): void {
  this.filtrosService.fechaFiltrada.subscribe((data: any) => {
    this.fechaFiltrada = data;
    this.reporteService.obtenerSumaOperacionesSucursalPost(data).subscribe((resp: any) => {
      this.single = resp;
      Object.assign(this, this.single);
    })
  });
  this.filtrosService.datosFiltrados.subscribe((data: Sucursales[]) => {
    this.filtroSucursal = [];
    data.forEach((i: Sucursales) => {
      this.filtroSucursal.push(i.name);
    });
    console.log(this.filtroSucursal);
    if (this.fechaFiltrada) {
      this.reporteService.obtenerSumaOperacionesSucursalPost(this.fechaFiltrada).subscribe((resp: any) => {
        this.single = resp.filter((valor: Sucursales) => this.filtroSucursal.includes(valor.name));
      });
    } else {
      this.reporteService.obtenerSumaOperacionesSucursal().subscribe((resp: any) => {
        this.single = resp.filter((valor: Sucursales) => this.filtroSucursal.includes(valor.name));
        Object.assign(this, this.single);
      });
    }

  });

}

}
