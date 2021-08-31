
import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

import {  Input } from '@angular/core'

import { ActivatedRoute, Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

 import { FormBuilder, FormGroup, Validators,ValidationErrors, ValidatorFn} from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../service/api.service';
import { CommonService } from '../../../service/common.service';
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
 
  constructor(private router: Router,  private modalService:NgbModal,  private _apiService:ApiService, private _commService: CommonService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getNotificationHistory()
  }
  reviewModal(review) {
    this.modalService.open(review, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  getNotificationHistory(){
    
  }
}
