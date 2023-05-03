import { Component } from '@angular/core';
import { ReportesService } from '../reportes.service';

@Component({
  selector: 'app-grafico-pie',
  templateUrl: './grafico-pie.component.html',
  styleUrls: ['./grafico-pie.component.scss']
})
export class GraficoPieComponent {
  single!: any;
  view: [number, number] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = true;

  colorScheme = "vivid";

  constructor(
    private reporteService:ReportesService
  ) {
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
    this.reporteService.obtenerCantidadOperaciones().subscribe((resp:any)=>{
      this.single = resp
      Object.assign(this.single);
    })
  }
}
