import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IProducts } from '../dataInterfaces';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  Orders = [];
  Products: IProducts[];

  config: any;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getOrders().subscribe(value => {
      this.Orders = value;
    });

    this.config = {
      itemsPerPage: 19,
      currentPage: 1,
      totalItems: this.Orders.length
    };
  }
  pageChanged(event) {
    this.config.currentPage = event;
  }
}
