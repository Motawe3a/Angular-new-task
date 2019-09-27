import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { EditComponentComponent } from './products/edit-component/edit-component.component';
import { OrderDetailComponent } from './orders/order-detail/order-detail.component';


const routes: Routes = [
  {path: '', redirectTo: 'products', pathMatch: 'full' },
  {path: 'products', component: ProductsComponent },
  {path: 'products/edit/:ProductId', component: EditComponentComponent},
  {path: 'orders', component: OrdersComponent },
  {path: 'orders/:OrderId', component: OrderDetailComponent },
  {path: '**', redirectTo: 'products'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
