import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OthersComponent} from './others.component';
import {AnalyticsComponent} from './analytics/analytics.component';
import { GroupVolumeFormComponent } from './group-volume-form/group-volume-form.component';

const routes: Routes = [
  {
    path: '',
    component:OthersComponent,
    children:[
      {
        path: 'analytics',
        component:AnalyticsComponent,
        data: {
          title:"Analytics"
        }
      },
      {
        path: 'groupform',
        component:GroupVolumeFormComponent,
        data: {
          title:"Group Volume Form"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OthersRoutingModule { }
