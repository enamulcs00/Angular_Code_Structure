import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import { SubscriptionRoutingModule } from './subscription-routing.module';
import { SubscriptionPlanComponent } from './subscription-plan/subscription-plan.component';
import { SubscriptionComponent } from './subscription.component';
import { AddSubscriptionComponent } from './add-subscription/add-subscription.component';


@NgModule({
  declarations: [SubscriptionPlanComponent, SubscriptionComponent, AddSubscriptionComponent],
  imports: [
    CommonModule,
    SubscriptionRoutingModule,
    MatDialogModule
  ]
})
export class SubscriptionModule { }
