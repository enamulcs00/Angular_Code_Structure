import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-notificaton-list',
  templateUrl: './notificaton-list.component.html',
  styleUrls: ['./notificaton-list.component.css']
})
export class NotificatonListComponent implements OnInit {
  disableSelect = new FormControl(false);
  toppings = new FormControl();
  toppingList: string[] = ['All', 'User1', 'User2', 'User3', 'User4', 'User5'];
  toppingId: string[] = ['#334343', '#634343', '#454543', '#765654', '#334343', '#233232'];
 
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  reviewModal(review) {
    this.modalService.open(review, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
}
