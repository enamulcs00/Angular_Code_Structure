import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../service/auth-guard/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './setting.component';
// import {AuthGuard} from '../'

const routes: Routes = [
  {
    path:'',
    component:SettingComponent,
    children:[
      {
        path:"profile",
        component:ProfileComponent,
        // canActivate: [AuthGuard],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
