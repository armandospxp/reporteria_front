import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = localStorage.getItem('currentUser'); // Obtener el token almacenado en localStorage

    if (currentUser) {
      // Clonar la solicitud y agregar el encabezado de autorización con el token
      const token = JSON.parse(currentUser);
      const params = new HttpParams().set('username', token.username)
      const authRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token.token}`
        },
        params:params
      });

      return next.handle(authRequest);
    }

    return next.handle(request);
  }
}