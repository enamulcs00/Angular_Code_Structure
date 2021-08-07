import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory.component';
import { InventorylistComponent } from './inventorylist/inventorylist.component';

const routes: Routes = [
  {
    path:'',
    component:InventoryComponent,
    children:[
      {
        path:'inventorylist',
        component:InventorylistComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
