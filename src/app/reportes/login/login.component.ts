import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ReportesService } from '../reportes.service';
import { LoginInterface } from './interface/login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user = {
    user: '',
    password: ''
  }

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private reporteService: ReportesService
  ) {
  }

  login() {
    console.log(this.user);
    const validar = this.isFormValid();
    if (validar) {
      this.obtenerTokenOauth(this.user);
    } else {
      this.toastr.error('Debe completar todos los campos del formulario');
    }
  }

  isFormValid(): boolean {
    if (this.user.user === '' || this.user.password === '') {
      return false;
    } else {
      return true;
    }
  }

  loginOauth() {
    this.router.navigate(['/']);
  }

  obtenerTokenOauth(user: any) {
    this.reporteService
      .login(user)
      .subscribe((response: any) => {
        if (response.token) {
          localStorage.clear();
          localStorage.setItem('currentUser', JSON.stringify(response));
          this.router.navigate(['/']).then(
            (nav) => {
              console.log(nav); // true if navigation is successful
            },
            (err) => {
              console.log(err); // when there's an error
            }
          );
        } else {
          this.toastr.error(response.detail);
        }

      }, (error: any) => {
        console.log(error);
        this.toastr.error(error.error.detail);
      });
  }
}
