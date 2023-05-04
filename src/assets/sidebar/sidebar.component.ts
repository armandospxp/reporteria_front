import { Component } from '@angular/core';
import { SidebarService } from './sidebar.service';
import { Sucursales } from './interfaces/sidebar';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  providers: [SidebarService],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  
  sucursales!:Sucursales[];
  
  constructor(
    private sidebarService:SidebarService
  ){}

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
