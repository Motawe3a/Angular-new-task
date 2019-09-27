import { Component, OnInit } from '@angular/core';
import { IProducts } from 'src/app/dataInterfaces';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.scss']
})
export class EditComponentComponent implements OnInit {

  productDetail: IProducts;
  ProductId: number;

  constructor(private _dataService: DataService,
              private route: ActivatedRoute,
              private router: Router) { }

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
    // this._dataService.editProduct(form.value.ProductName,form.value.AvailablePieces)
  }

  onEdit() {
    this.router.navigate(['/products']);
  }


}
