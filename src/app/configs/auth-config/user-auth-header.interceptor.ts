import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserService} from "../../services/user-service/user.service";

@Injectable()
export class UserAuthHeaderInterceptor implements HttpInterceptor {

  constructor(
    private userService: UserService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const clonedRequest = request.clone({ headers: request.headers.append('Authorization', this.userService.getUserAuthToken()) });

    // Pass the cloned request instead of the original request to the next handle
    return next.handle(clonedRequest);

  }
}
