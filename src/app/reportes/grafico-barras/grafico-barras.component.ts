import { Component, Input } from '@angular/core';
import { ReportesService } from '../reportes.service';
import { Sucursales } from 'src/app/reportes/interfaces/sucursales';
import { FiltrosService } from '../filtros/filtros.service';
import { Supervisores } from '../interfaces/supervisores';


@Component({
  selector: 'app-grafico-barras',
  templateUrl: './grafico-barras.component.html',
  styleUrls: ['./grafico-barras.component.scss'],
})
export class GraficoBarrasComponent {
  single!: any;
  view: any[] = [700, 400];

  filtroSucursal: string[] = [];

  idSupervisoresFiltrados: number[] = [];


  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = false;
  yAxisLabel: string = 'Sucursales';
  showYAxisLabel: boolean = false;
  xAxisLabel: string = 'Cantidad';
  showDataLabel: boolean = true;

  colorScheme = "vivid"
  // colorScheme = {
  //   domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  // };

  fechaFiltrada: any;

  newData: any;

  constructor(
    private reporteService: ReportesService,
    private filtrosService: FiltrosService
  ) {
    this.reporteService.obtenerCantidadOperaciones().subscribe((resp: any) => {
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
  ngOnInit(): void {
    this.filtrosService.fechaFiltrada.subscribe((data: any) => {
      this.fechaFiltrada = data;
      this.reporteService.obtenerCantidadOperacionesPost(data).subscribe((resp: any) => {
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
        this.reporteService.obtenerCantidadOperacionesPost(this.fechaFiltrada).subscribe((resp: any) => {
          this.single = resp.filter((valor: Sucursales) => this.filtroSucursal.includes(valor.name));
        });
      } else {
        this.reporteService.obtenerCantidadOperaciones().subscribe((resp: any) => {
          this.single = resp.filter((valor: Sucursales) => this.filtroSucursal.includes(valor.name));
          Object.assign(this, this.single);
        });
      }

    });
    this.filtrosService.supervisorFiltrado.subscribe((data: Supervisores[]) => {
      // this.reporteService.obtenerCantidadOperacionesPost(data).subscribe((resp:any)=>{
      //   Object.assign(this, resp);
      // })
      this.idSupervisoresFiltrados = [];
      data.forEach((i: Supervisores) => {
        this.idSupervisoresFiltrados.push(i.id);
      });
      this.newData = { "supervisores": this.idSupervisoresFiltrados };
      console.log(this.newData);
      this.reporteService.obtenerCantidadOperacionesPost(this.newData).subscribe((resp: any) => {
        this.single = resp;
        Object.assign(this, this.single);
        console.log(resp);
      })
    });

  }

}
