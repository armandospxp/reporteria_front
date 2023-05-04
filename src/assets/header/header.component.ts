import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { DatepickerComponent } from '../datepicker/datepicker.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgbDatepickerModule, NgbAlertModule, DatepickerComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
}
