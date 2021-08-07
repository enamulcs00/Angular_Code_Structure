import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewRoutingModule } from './review-routing.module';
import { ReviewComponent } from './review.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ReviewComponent, ReviewListComponent],
  imports: [
    CommonModule,
    ReviewRoutingModule,
    NgbModule
  ]
})
export class ReviewModule { }
