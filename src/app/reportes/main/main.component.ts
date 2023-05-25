import { Component, Input } from '@angular/core';
import { Spinkit } from 'ng-http-loader';
import { Banca } from './interfaces/bancas';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  @Input() datosFilt!: any;
  public spinkit = Spinkit;
  public date = new Date()
  public anio_actual = this.date.getFullYear();

  labels: Banca = { micro: { nombre: "Micro", valor: 130 }, consumo: {
    nombre: "Consumo", valor: 240 }, debito: { nombre: "Débito", valor: 250 } }

  ngOnInit() {
  }
}
