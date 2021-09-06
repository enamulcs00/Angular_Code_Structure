
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
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-notificaton-list',
  templateUrl: './notificaton-list.component.html',
  styleUrls: ['./notificaton-list.component.css']
})
export class NotificatonListComponent implements OnInit {
  page: number=0;
  limit: number=10;
  searchText:any = '';
  type:any
  notificationDetails: any;
  notificationDetailsCount: any;

 
 
  constructor(private router: Router,  private modalService:NgbModal,  private _apiService:ApiService, private _commService: CommonService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getNotificationHistory('')
  }
 
  getNotificationHistory(event){
    console.log("eeeeeeeeeeeeeeeeeeeee");
    console.log(event);
    if(event != '' ) {
 
      this.page = 0;
    
     } 
   
     
     const reqbody={  "search": this.searchText.trim(), "page": 0,"limit":this.limit }
    this._apiService.postRequest('api/v1/admin/getAllUser',reqbody).subscribe((response:any) => {
    
      console.log("response",response)
      this.notificationDetails=response.data.userData;
      this.notificationDetailsCount=response.data.count
    
      console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
      
    },(err: any) => {
      this._commService.errorMsg(err.error.message)
      this._commService.hideSpinner()
    })
    
  }
  handlePageEvent(event:PageEvent){
    this.limit = event.pageSize;
    this.page = event.pageIndex;
    const reqbody={  "search": this.searchText.trim(), "page": this.page,"limit":this.limit}
    this._apiService.postRequest('api/v1/admin/getAllUser',reqbody).subscribe((response:any) => {
    
      console.log("response",response)
      this.notificationDetails=response.data.userData;
      this.notificationDetailsCount=response.data.count
    
      console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
      
    },(err: any) => {
      this._commService.errorMsg(err.error.message)
      this._commService.hideSpinner()
    })
  }
}
