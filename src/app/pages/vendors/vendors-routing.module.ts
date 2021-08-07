import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddVendorComponent } from "./add-vendor/add-vendor.component";
import { EditVendorComponent } from "./edit-vendor/edit-vendor.component";
import { VendorListComponent } from "./vendor-list/vendor-list.component";
import { VendorsComponent } from "./vendors.component";

const routes: Routes = [
  {
    path: "",
    component: VendorsComponent,
    children: [
      {
        path:"vendorlist",
		component:VendorListComponent
      },
	  {
        path:"addvendor",
		component:AddVendorComponent
      },
	  {
        path:"editvendor",
		component:EditVendorComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorsRoutingModule {}
