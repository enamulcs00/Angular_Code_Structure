import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "./users.component";
import { ListUserComponent } from "./list-user/list-user.component";
import { DetailUserComponent } from "./detail-user/detail-user.component";
import { EditUserComponent } from "./edit-user/edit-user.component";
const routes: Routes = [
  {
    path : "",
    redirectTo : "userlist",
    pathMatch : "full"
  },
  {
    path: "",
    component: UsersComponent,
    children: [
      {
        path: "userlist",
        component: ListUserComponent,
        data: {
          title: "Users",
        }
      },
      {
        path: "userlist/:type/:id",
        component: EditUserComponent,
        
      },
      {
        path: "userdetail",
        component: DetailUserComponent,
        data: {
          title: "Users Detail",
        }
      },
      // {
      //   path: "useredit",
      //   component: EditUserComponent,
      //   data: {
      //     title: "Users Edit",
      //   }
      // },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
