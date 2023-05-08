import { Component } from '@angular/core';
import { SidebarService } from './sidebar.service';
import { Sucursales } from './interfaces/sidebar';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [SidebarService],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  sucursalesFiltradas: any;

filtrar() {
  this.sucursalesFiltradas = this.sucursales.filter(opcion => opcion.seleccionado);
  console.log(this.sucursalesFiltradas);
}

  form:FormGroup;
  filtroSeleccionado:any = []
  
  sucursales!:Sucursales[];

  constructor(
    private sidebarService:SidebarService,
    private fb:FormBuilder
  ){
    this.form = this.fb.group({
      suc: new FormArray([])
    });
  }

  ngOnInit():void{
    this.sidebarService.obtenerSucursales().subscribe((resp:any)=>{
      console.log(resp);
      this.sucursales = resp;
    });
  }

  checkValue(event: any){
    console.log(event);
 }

}
