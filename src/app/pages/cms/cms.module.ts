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

@NgModule({
  declarations: [CmsComponent, AboutComponent, LegalComponent, PrivacyComponent, FaqComponent, ContactComponent],
  imports: [
    CommonModule,
    CmsRoutingModule,
    QuillModule.forRoot(),
  ]
})
export class CmsModule { }
