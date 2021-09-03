import { Component, OnInit } from '@angular/core';
import {  Input } from '@angular/core'

import { ActivatedRoute, Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

 import { FormBuilder, FormGroup, Validators,ValidationErrors, ValidatorFn} from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../service/api.service';
import { CommonService } from '../../../service/common.service';


@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {
  @Input('item') public items;
  privacyDetails: any={};

  constructor(private router: Router, private _apiService:ApiService, private _commService: CommonService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getPrivacy()
  }
  updatePrivacy(){
    const obj={
      "privacy":this.privacyDetails.privacy || ""


    }
    this._apiService
    .postRequest("api/v1/admin/addCms", obj)
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
  getPrivacy(){
    this._apiService.getRequestWithoutbody('api/v1/admin/getCms').subscribe(response => {
    
    
      this.privacyDetails=response['data'];
    
      console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
      
    },(err: any) => {
      this._commService.errorMsg(err.error.message)
      this._commService.hideSpinner()
    })

  }

}
