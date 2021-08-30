import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { CmsComponent } from "./cms.component";
import { ContactComponent } from "./contact/contact.component";
import { FaqComponent } from "./faq/faq.component";
import { LegalComponent } from "./legal/legal.component";
import { PrivacyComponent } from "./privacy/privacy.component";
import { CmslistComponent } from './cmslist/cmslist.component';
import { AuthGuard } from "../../service/auth-guard/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: CmsComponent,
    children: [
      {
        path: "about",
        component: AboutComponent,
        data: {
          title: "About",
        },
      },
      {
        path: "cmslist",
        // canActivate: [AuthGuard],
         component: CmslistComponent,
     
        data: {
          title: "CMS",
        },
      },
      {
        path: "legal",
        component: LegalComponent,
        data: {
          title: "Legal",
        },
      },
      {
        path: "privacy",
        component: PrivacyComponent,
        data: {
          title: "Privacy",
        },
      },
      {
        path: "contact",
        component: ContactComponent,
        data: {
          title: "Contact",
        },
      },
      {
        path: "faq",
        component: FaqComponent,
        data: {
          title: "Faq",
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CmsRoutingModule {}
