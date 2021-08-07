import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationComponent } from './notification.component';
import { NotificatonListComponent } from './notificaton-list/notificaton-list.component';
import { AddNotificationComponent } from './add-notification/add-notification.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [NotificationComponent, NotificatonListComponent, AddNotificationComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NotificationRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatInputModule,
    NgbModule,
   
  ]
})
export class NotificationModule { }
