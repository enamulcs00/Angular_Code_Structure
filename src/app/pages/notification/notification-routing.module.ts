import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificatonListComponent } from './notificaton-list/notificaton-list.component';
import { NotificationComponent } from './notification.component';
import { AddNotificationComponent } from './add-notification/add-notification.component';
const routes: Routes = [
  {
    path:'',
    component:NotificationComponent,
    children:[
      {
        path:'addnotification',
        component:AddNotificationComponent,
        data: {
          title: "Add Notification",
        }
      },
      {
        path:'notificationlist',
        component:NotificatonListComponent,
        data: {
          title: "Notificaton",
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationRoutingModule { }
