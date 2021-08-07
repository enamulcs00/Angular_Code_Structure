import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrdersComponent} from './orders.component';
import {OrdersListComponent} from './orders-list/orders-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
const routes: Routes = [
  {
    path:'',
    component:OrdersComponent,
    children:[
      {
        path:'orderslist',
        component:OrdersListComponent
      },
      {
        path:'orderdetail',
        component:OrderDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
