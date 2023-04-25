import { Component } from '@angular/core';
import { single } from '../grafico-barras/data';

@Component({
  selector: 'app-grafico-tree',
  templateUrl: './grafico-tree.component.html',
  styleUrls: ['./grafico-tree.component.scss']
})
export class GraficoTreeComponent {
  single!: any[];
  view: any[] = [700, 400];

  // options
  gradient: boolean = false;
  animations: boolean = true;

  colorScheme = "vivid";

  constructor() {
    Object.assign(this, { single });
  }

  onSelect(event: any) {
    console.log(event);
  }

  labelFormatting(c: { label: any; }) {
    return `${(c.label)} Population`;
  }
}
