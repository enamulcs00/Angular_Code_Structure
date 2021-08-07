import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { OthersRoutingModule } from './others-routing.module';
import { OthersComponent } from './others.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GroupVolumeFormComponent } from './group-volume-form/group-volume-form.component';

@NgModule({
  declarations: [OthersComponent, AnalyticsComponent, GroupVolumeFormComponent],
  imports: [
    CommonModule,
    OthersRoutingModule,
    ChartsModule,
    NgxChartsModule,
    NgbModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule
  ]
})
export class OthersModule { }
