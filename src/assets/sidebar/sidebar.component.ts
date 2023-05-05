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
submit() {
throw new Error('Method not implemented.');
}
  form:FormGroup;
  
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
      this.addCheckboxes();
    });
  }

  checkValue(event: any){
    console.log(event);
 }

 private addCheckboxes() {
  this.sucursales.map((o, i) => {
    const control = new FormControl(i === 0); // if first item set to true, else false
    (this.form.controls['suc'] as FormArray).push(control);
  });
}
}
