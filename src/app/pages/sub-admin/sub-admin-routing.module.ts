import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { SubAdminComponent } from './sub-admin.component';

const routes: Routes = [
  {
    path:'',
    component:SubAdminComponent,
    children:[
      {
        path:'adminlist',
        component:AdminListComponent,
        data: {
          title: "Sub Admin",
        }
      },
      {
        path:'addadmin',
        component:AddAdminComponent,
        data: {
          title: "Add Sub Admin",
        }
      },
      {
        path:'editadmin',
        component:EditAdminComponent,
        data: {
          title: "Edit Sub Admin",
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubAdminRoutingModule { }
