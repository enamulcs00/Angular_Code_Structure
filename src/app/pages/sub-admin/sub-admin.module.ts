import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubAdminRoutingModule } from './sub-admin-routing.module';
import { SubAdminComponent } from './sub-admin.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import {NgxScrollToFirstInvalidModule} from '@ismaestro/ngx-scroll-to-first-invalid';


@NgModule({
  declarations: [SubAdminComponent, AddAdminComponent, EditAdminComponent, AdminListComponent],
  imports: [
    CommonModule,
    SubAdminRoutingModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    FormsModule,
    MatPaginatorModule,
    NgxScrollToFirstInvalidModule,
    NgbModule
  ]
})
export class SubAdminModule { }
