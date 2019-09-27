import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { DataService } from './data.service';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { EditComponentComponent } from './products/edit-component/edit-component.component';
import { OrderDetailComponent } from './orders/order-detail/order-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    OrdersComponent,
    EditComponentComponent,
    OrderDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
})


  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
