import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { CmsComponent } from './cms.component';
import { AboutComponent } from './about/about.component';
import { LegalComponent } from './legal/legal.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { QuillModule } from 'ngx-quill';
import {MatTabsModule} from '@angular/material/tabs';
import { CmslistComponent } from './cmslist/cmslist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CmsComponent, AboutComponent, LegalComponent, PrivacyComponent, FaqComponent, ContactComponent, CmslistComponent],
  imports: [
    CommonModule,
    CmsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    MatTabsModule
  ]
})
export class CmsModule { }
