import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewListComponent } from './review-list/review-list.component';
import {ReviewComponent} from './review.component'

const routes: Routes = [
  {
    path:"",
    component:ReviewComponent,
    children:[
      {
        path:"reviewlist",
        component:ReviewListComponent,
        data: {
          title: "Support",
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewRoutingModule { }
