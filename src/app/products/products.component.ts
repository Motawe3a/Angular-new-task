import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public Products = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getAllProducts().subscribe(data => {
      console.log(data)
      this.Products = data
    })
  }

}
