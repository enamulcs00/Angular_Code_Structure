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
  a: any;
  b: any;
  add: any;
  edit: any;
  delete: any;
  value: any;

  constructor(private router: Router, private _apiService:ApiService, private _commService: CommonService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.a=JSON.parse(localStorage.getItem('user')).role
   
    this.b=JSON.parse(localStorage.getItem('permissionItems'))
    console.log(this.a,this.b,"nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
    if(this.a==2){
      this.b.forEach(element=>{
        if(element.label=="CMS"){
          this.add=element.isAdd,
          this.edit=element.isEdit,
          this.delete=element.isDelete
        }
  
      })
      console.log(this.add);
      console.log(this.edit);
      console.log(this.delete);
    }
    this.getPrivacy()

  }
  updatePrivacy(){
    console.log("checkkkkkkkkkkkkkkkk",this.privacyDetails.privacy?.length,this.privacyDetails.privacy)
    if(this.privacyDetails.privacy.replace(/<(.|\n)*?>/g, '').trim().length != 0){
      const obj={
        "privacy":this.privacyDetails.privacy
  
  
      }
      this._apiService
      .postRequest("api/v1/admin/addCms", obj)
      .subscribe((response:any) => {
        console.log(response);
    
        this._commService.successMsg(response.message);
        this.getPrivacy()
      }
      ,(err: any) => {
        if(err.error.message)
        this._commService.errorMsg(err.error.message)
        else{
          this._commService.errorMsg("No Internet Connection")
        }
        this._commService.hideSpinner()
      }
      );

    }
    else{
      this._commService.errorMsg("Please add some value to update")
    }
    
  }

  
//   handleInput(event) {
//     if (event.which === 32 && this.value?.length==8)
//         event.preventDefault();
// }
  getPrivacy(){
    this._apiService.getRequestWithoutbody('api/v1/admin/getCms').subscribe(response => {
    
    
       this.privacyDetails=response['data'];
    
      console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
      
    },(err: any) => {
      if(err.error.message)
      this._commService.errorMsg(err.error.message)
      else{
        this._commService.errorMsg("No Internet Connection")
      }
      this._commService.hideSpinner()
    })

  }

}
