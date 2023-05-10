import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportesModule } from 'src/app/reportes/reportes.module';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, ReportesModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(
  ){
  }

}
