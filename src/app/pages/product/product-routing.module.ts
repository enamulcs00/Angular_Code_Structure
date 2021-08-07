import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './product.component'
import {ProductlistComponent} from './productlist/productlist.component';
import {AddproductComponent} from './addproduct/addproduct.component';
import { EditproductComponent} from './editproduct/editproduct.component';

const routes: Routes = [
  {
    path:'',
    component:ProductComponent,
    children:[
    {
      path:"productlist",
      component:ProductlistComponent
    },
    {
      path:"addproduct",
      component:AddproductComponent
    },
    {
      path:"editproduct",
      component:EditproductComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
