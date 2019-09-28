import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class AppInterceptorService implements HttpInterceptor {

  constructor() {}

  handleError(error: HttpErrorResponse) {
    // add any kind of message to return
    return throwError(error);
  }
  intercept( request: HttpRequest<any>, next: HttpHandler ):
  Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

}
