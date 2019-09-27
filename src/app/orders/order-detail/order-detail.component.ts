import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IOrders } from 'src/app/dataInterfaces';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  OrderId: number;
  orderDetail: IOrders[];

  constructor(private _dataService: DataService,
    private route: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.route.params.subscribe(r => {
      if (!r.OrderId) {
        // todo in case not find id
      } else {
        this.OrderId = +r.OrderId;
        this._dataService.getOrder(this.OrderId).subscribe(value => {
          this.orderDetail = value;
          this.toastr.warning('order data only', 'show Order', {timeOut: 2000});

        });
      }
    });
  }

}
