import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
cerrarSesion() {
  localStorage.clear();
  this.router.navigate(['/login']);
}
  user = localStorage.getItem("currentUser");
  userN:any;
  username:string = "";
  franquicia:string = "";
  random:any;

  constructor(private router: Router){
    this.random = Math.floor(Math.random()*100);
  }

  ngOnInit() {
    if (this.user) {
      this.userN = JSON.parse(this.user);
      this.username = this.userN.username;
      this.franquicia = this.userN.franquicia;
    }
  }
}
