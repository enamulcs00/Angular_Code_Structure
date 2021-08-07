import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubAdminRoutingModule } from './sub-admin-routing.module';
import { SubAdminComponent } from './sub-admin.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [SubAdminComponent, AddAdminComponent, EditAdminComponent, AdminListComponent],
  imports: [
    CommonModule,
    SubAdminRoutingModule,
    NgbModule
  ]
})
export class SubAdminModule { }
