import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Get the auth token from the service
    const authToken = AuthService.getToken();

    if (authToken) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + authToken),
      });
      // send cloned request with header to the next handler
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
