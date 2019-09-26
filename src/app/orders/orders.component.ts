import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  public Orders = [];

  config: any;

  constructor(private _dataService: DataService) {
  }

  ngOnInit() {
    this._dataService.getOrders().subscribe(value => {
      console.log(value)
      this.Orders = value;
    });

    this.config = {
      itemsPerPage: 20,
      currentPage: 1,
      totalItems: this.Orders.length
    };
  }
  pageChanged(event){
    this.config.currentPage = event;
  }
}
