import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevenueRoutingModule } from './revenue-routing.module';
import { RevenueComponent } from './revenue.component';
import { RevenueListComponent } from './revenue-list/revenue-list.component';


@NgModule({
  declarations: [RevenueComponent, RevenueListComponent],
  imports: [
    CommonModule,
    RevenueRoutingModule
  ]
})
export class RevenueModule { }
