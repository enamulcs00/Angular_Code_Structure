import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [OrdersComponent, OrdersListComponent, OrderDetailComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    NgbModule
  ]
})
export class OrdersModule { }
