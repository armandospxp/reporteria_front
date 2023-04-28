import { Component } from '@angular/core';
import { ReportesService } from '../reportes.service';

@Component({
  selector: 'app-grafico-tree',
  templateUrl: './grafico-tree.component.html',
  styleUrls: ['./grafico-tree.component.scss']
})
export class GraficoTreeComponent {
  single!:any;
  view: any[] = [700, 400];

  // options
  gradient: boolean = false;
  animations: boolean = true;

  colorScheme = "vivid";

  constructor(private reporteService: ReportesService) {
    //Object.assign(this, { single });
  }

  onSelect(event: any) {
    console.log(event);
  }

  labelFormatting(c: { label: any; }) {
    return `${(c.label)}`;
  }

  ngOnInit():void{
    this.reporteService.obtenerCantidadOperaciones().subscribe((resp:any) =>{
      this.single = resp;
     Object.assign(this, this.single);
   });
   }
}
