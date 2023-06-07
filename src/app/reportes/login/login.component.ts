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

  isFormValid(): boolean {
    if (this.user.user.length === 0 && this.user.password.length === 0) {
      this.toastr.error('Debe completar todos los campos del formulario');
      return false;
    }
    return true;
  }

  loginOauth() {
    this.router.navigate(['/']);
  }

  obtenerTokenOauth(user: any) {
    this.reporteService
      .login(user)
      .subscribe((response:any) => {
        debugger;
        if (response.token) {
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
          this.toastr.error(response.error);
        }

      }, (error: any) => {
        console.log(error);
        this.toastr.error(error.error.error_description);
      });
  }


}
