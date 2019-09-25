import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { IProducts, IOrders} from './dataInterfaces';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private _http: HttpClient) { }

  getAllProducts(): Observable<IProducts[]> {
    return this._http.get<IProducts[]>('./assets/data/Products.json')
  }

  getOrders(): Observable<IOrders[]> {
    const requestOptions = Object.assign(
      { responseType: 'json' },
    );

    return this._http.get<IOrders[]>('./assets/data/Orders.json')


  }
}
