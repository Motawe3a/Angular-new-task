import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProducts} from './dataInterfaces';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _url: string = './assets/data/Products.json';

  constructor(private _http: HttpClient) { }

  getAllProducts(): Observable<IProducts[]> {
    return this._http.get<IProducts[]>(this._url)
  }
}
