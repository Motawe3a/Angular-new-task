import { Component, OnInit, ViewChild } from '@angular/core';
import { IProducts } from 'src/app/dataInterfaces';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { ActivationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  productDetail: IProducts;
  ProductId: number;

  constructor(private _dataService: DataService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(r => {
      if (!r.ProductId) {
        // todo in case not find id
      } else {
        this.ProductId = +r.ProductId;
        this._dataService.getproduct(this.ProductId).subscribe(value => {
          this.productDetail = value[0];
        });
      }
    });
  }

  Save(form: NgForm) {
    console.log(form.value);
    // this._dataService.editProduct(form.value.ProductName,form.value.AvailablePieces)
  }

}
