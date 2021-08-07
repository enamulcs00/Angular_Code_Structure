import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RevenueComponent } from './revenue.component';
import { RevenueListComponent } from './revenue-list/revenue-list.component';

const routes: Routes = [
  {
    path:'',
    component:RevenueComponent,
    children: [
      {
        path:'revenuelist',
        component:RevenueListComponent

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevenueRoutingModule { }
