import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

import { FormBuilder, FormGroup, Validators,ValidationErrors, ValidatorFn} from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../service/api.service';
import { CommonService } from '../../service/common.service';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  a:any
  otpForm:FormGroup
  isSubmitted:boolean=false

  config = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      'width': '50px',
      'height': '50px'
    }
  };

  message: string;
  otp: any;
  submitted: boolean = false;;

  constructor(public router: Router,private fb:FormBuilder, private _apiService:ApiService, private _commService:CommonService) { }

  ngOnInit() {
    this.a=localStorage.getItem('email')
    console.log("niceeeeeeeeeeeeeeeee",this.a);
    
    this.otpForm=this.fb.group({
      otp:["",[Validators.required, Validators.minLength(4)]]
    })
  }
  verifyOtp(){
    this.isSubmitted=true
    
  }
  phoneNoInput(event) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode >= 48 && charCode <= 57) {
      return true;
    }
    return false;
  }
  check(event){
    if (event.target.value.length==4){
      const obj={
        "otp":event.target.value,
        "email":localStorage.getItem('email')

      }
      this._apiService.postRequest('api/v1/admin/otp',obj).subscribe((response:any) => {
    
        console.log("response",response)
        this._commService.successMsg(response.message)
        this.router.navigateByUrl('/authentiction/changepwd')
        
      
        console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
        
      },(err: any) => {
        this._commService.errorMsg(err.error.message)
        this._commService.hideSpinner()
      })
  
      

    }
  }




  

}
