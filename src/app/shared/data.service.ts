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
    return this.http.get<IProducts[]>('./assets/data/Products.json', {responseType: 'json'});
  }

  getOrders(): Observable<IOrders[]> {

    return this.http.get<IOrders[]>('./assets/data/Orders.json');
  }

  getproduct(id: number): Observable<IProducts[]> {
    return this.http.get<IProducts[]>('./assets/data/Products.json').pipe(
        map((value) => {
          return value.filter(ele => {
            return ele.ProductId === id;
          });
        }),
        );
  }

  getOrder(id: number): Observable<IOrders[]> {
    return this.http.get<IOrders[]>('./assets/data/Orders.json').pipe(
        map((value) => {
          return value.filter(ele => {
            return ele.OrderId === id;
          });
        })
    );
  }
}
