import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-add-notification',
  templateUrl: './add-notification.component.html',
  styleUrls: ['./add-notification.component.css']
})
export class AddNotificationComponent implements OnInit {
  disableSelect = new FormControl(false);
  toppings = new FormControl();
  toppingList: string[] = ['All', 'User1', 'User2', 'User3', 'User4', 'User5'];
  toppingId: string[] = ['#334343', '#634343', '#454543', '#765654', '#334343', '#233232'];
  constructor() { }

  ngOnInit(): void {
  }

}
