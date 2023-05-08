import { Component, Input } from '@angular/core';
import { Sucursales } from 'src/assets/sidebar/interfaces/sidebar';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  @Input() datosFilt!:any;

  ngOnInit(){
  }
}
