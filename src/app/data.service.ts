import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { IProducts, IOrders} from './dataInterfaces';
import { Observable } from 'rxjs/internal/Observable';
import { map, catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<IProducts[]> {
    return this.http.get<IProducts[]>('./assets/data/Products.json', {responseType: 'json'})
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getOrders(): Observable<IOrders[]> {

    return this.http.get<IOrders[]>('./assets/data/Orders.json')
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getproduct(id: number): Observable<IProducts[]> {
    return this.http.get<IProducts[]>('./assets/data/Products.json').pipe(

        retry(2),
        map((value) => {
          return value.filter(ele => {
            return ele.ProductId === id;
          });
        }),
        catchError(this.handleError)
        );
  }

  getOrder(id: number): Observable<IOrders[]> {
    return this.http.get<IOrders[]>('./assets/data/Orders.json').pipe(
        retry(2),
        map((value) => {
          return value.filter(ele => {
            return ele.OrderId === id;
          });
        }),
        catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    // add any kind of message to return
    return throwError(error);
  }
}
