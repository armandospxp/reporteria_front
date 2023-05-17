import { Component, Input } from '@angular/core';
import { Spinkit } from 'ng-http-loader';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  @Input() datosFilt!: any;
  public spinkit = Spinkit;

  ngOnInit() {
  }
}
