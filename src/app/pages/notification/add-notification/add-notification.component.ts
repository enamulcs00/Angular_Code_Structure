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
  selector: 'app-add-notification',
  templateUrl: './add-notification.component.html',
  styleUrls: ['./add-notification.component.css']
})
export class AddNotificationComponent implements OnInit {
  isSubmitted:boolean=false
  notificationForm:FormGroup
  disableSelect = new FormControl(false);
  toppings = new FormControl();
  toppingList: string[] = ['All', 'User1', 'User2', 'User3', 'User4', 'User5'];
  toppingId: string[] = ['#334343', '#634343', '#454543', '#765654', '#334343', '#233232'];
  a: any;
  b: any;
  add: any;
  edit: any;
  delete: any;
  constructor(private router: Router,  private modalService:NgbModal,  private _apiService:ApiService, private _commService: CommonService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.a=JSON.parse(localStorage.getItem('user')).role
   
    this.b=JSON.parse(localStorage.getItem('permissionItems'))
    console.log(this.a,this.b,"nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
    if(this.a==2){
      this.b.forEach(element=>{
        if(element.label=="Notification"){
          this.add=element.isAdd,
          this.edit=element.isEdit,
          this.delete=element.isDelete
        }
  
      })
      console.log(this.add);
      console.log(this.edit);
      console.log(this.delete);
    }
    this.getNotification()
    this.notificationForm=this.fb.group({
      title:["",[Validators.required]],
      message:["",[Validators.required]]


    })
  }
  getNotification(){

  }
  sendNotification(){
    this.isSubmitted=true
    if(this.isSubmitted && this.notificationForm.valid){
      const obj={
        "title":this.notificationForm.value.title,
        "message":this.notificationForm.value.message
      }
      this._apiService
      .postRequest("api/v1/admin/sendNotification", obj)
      .subscribe((response:any) => {
        console.log(response);
    
        this._commService.successMsg(response.message);
        
      }
      ,(err: any) => {
        this._commService.errorMsg(err.error.message)
        this._commService.hideSpinner()
      }
      );

      
    }

  }

}
