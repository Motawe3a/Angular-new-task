import { Component, OnInit } from '@angular/core';
import { IProducts } from 'src/app/shared/dataInterfaces';
import { DataService } from 'src/app/shared/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.scss']
})
export class EditComponentComponent implements OnInit {

  productDetail: IProducts;
  ProductId: number;

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.route.params.subscribe(r => {
      if (!r.ProductId) {
        // todo in case not find id
      } else {
        this.ProductId = +r.ProductId;
        this.dataService.getproduct(this.ProductId).subscribe(value => {
          this.productDetail = value[0];
        });
      }
    });
  }

  Save(form: NgForm) {
    // this._dataService.editProduct(form.value.ProductName,form.value.AvailablePieces)
  }

  onEdit() {
    // in case of success sending the backend
    this.router.navigate(['/products']);
    this.toastr.success('Successful', 'Edit Product', {timeOut: 2000});
  }


}
