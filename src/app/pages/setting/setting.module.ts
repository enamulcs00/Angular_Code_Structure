import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting.component';
import { ProfileComponent } from './profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SettingComponent, ProfileComponent],
  imports: [
    CommonModule,
    SettingRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SettingModule { }
