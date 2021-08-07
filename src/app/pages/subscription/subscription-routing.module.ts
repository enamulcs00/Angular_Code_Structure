import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SubscriptionComponent} from './subscription.component';
import {SubscriptionPlanComponent} from './subscription-plan/subscription-plan.component';

const routes: Routes = [
  {
    path:'',
    component:SubscriptionComponent,
    children: [
      {
        path: 'plans',
        component: SubscriptionPlanComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionRoutingModule { }
