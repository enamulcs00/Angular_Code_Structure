import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AddSubscriptionComponent } from "../add-subscription/add-subscription.component";

@Component({
  selector: "app-subscription-plan",
  templateUrl: "./subscription-plan.component.html",
  styleUrls: ["./subscription-plan.component.css"],
})
export class SubscriptionPlanComponent implements OnInit {
  
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  addsubscriptionModal() {
     this.dialog.open(AddSubscriptionComponent, {
      height: "auto",
      width: "700px",
    });
  }
}
