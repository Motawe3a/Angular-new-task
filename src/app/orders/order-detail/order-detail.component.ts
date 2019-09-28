import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IOrders, IUsers } from 'src/app/shared/dataInterfaces';
import { Location } from '@angular/common';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  OrderId: number;
  UserId: number;
  orderDetail: IOrders[];
  userDetails: IUsers[];

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private toastr: ToastrService,
              private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(r => {
      if (!r.OrderId) {
        // todo in case not find id
      } else {
        this.OrderId = +r.OrderId;
        this.dataService.getOrder(this.OrderId).subscribe(value => {
          this.UserId = value[0].UserId;
          this.orderDetail = value;
          this.toastr.warning('order data only', 'show Order', {timeOut: 2000});
          this.dataService.getUserDetails(this.UserId).subscribe(userData => {
            this.userDetails = userData;
        });
      });
    }});
  }
  perviousPage() {
    this.location.back();
  }

}
