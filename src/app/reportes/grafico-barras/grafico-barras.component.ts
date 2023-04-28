import { Component } from '@angular/core';
import { ReportesService } from '../reportes.service';

@Component({
  selector: 'app-grafico-barras',
  templateUrl: './grafico-barras.component.html',
  styleUrls: ['./grafico-barras.component.scss']
})
export class GraficoBarrasComponent {
  single!: any;
  view: any[] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Sucursales';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Cantidad';

  colorScheme = "vivid"
  // colorScheme = {
  //   domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  // };

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
   this.reporteService.obtenerCantidadOperaciones().subscribe((resp:any) =>{
    this.single = resp;
    Object.assign(this, this.single);
  });
  }

}
