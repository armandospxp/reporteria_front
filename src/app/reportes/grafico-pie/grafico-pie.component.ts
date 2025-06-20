import { Component } from '@angular/core';
import { ReportesService } from '../reportes.service';
import { FiltrosService } from '../filtros/filtros.service';

@Component({
  selector: 'app-grafico-pie',
  templateUrl: './grafico-pie.component.html',
  styleUrls: ['./grafico-pie.component.scss']
})
export class GraficoPieComponent {
  single!: any;
  // view: [number, number] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = true;
  designatedTotal: any = '';

  colorScheme = "vivid";

  filtroSucursal:string[]=[];

  constructor(
    private reporteService:ReportesService,
    private filtrosService:FiltrosService
  ) {
    this.reporteService.obtenerMetasFranquicias().subscribe((resp:any)=>{
      this.designatedTotal = resp[0].value;
      console.log(resp);
      this.reporteService.obtenerSituacionFranquicias().subscribe((resp:any)=>{
        this.single = resp;
        Object.assign(this, this.single);
      });
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
  ngOnInit():void{
  }
}
