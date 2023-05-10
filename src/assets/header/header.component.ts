import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ReportesModule } from 'src/app/reportes/reportes.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgbDatepickerModule, NgbAlertModule, ReportesModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
}
