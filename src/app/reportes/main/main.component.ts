import { Component, Input } from '@angular/core';
import { Spinkit } from 'ng-http-loader';
import { Banca } from './interfaces/bancas';
import { ReportesService } from '../reportes.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  opciones = ['comparativo-mes', 'comparativo-dia', 'comparativo-cantidad-dia']

  @Input() datosFilt!: any;
  public spinkit = Spinkit;
  public date = new Date()
  public anio_actual = this.date.getFullYear();
  meta:any;

  labels: Banca = { micro: { nombre: "Micro", valor: 130 }, consumo: {
    nombre: "Consumo", valor: 240 }, debito: { nombre: "Débito", valor: 250 } }

  ngOnInit() {
  }

  constructor(private reporteService: ReportesService){
    this.reporteService.obtenerMetasFranquicias().subscribe((resp:any)=>{
      console.log(resp);
      this.meta = resp[0].value;
    })
  }
}
