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
    this.otpForm=this.fb.group({
      otp:["",[Validators.required]]
    })
  }
  verifyOtp(){
    this.isSubmitted=true
    if(this.isSubmitted && this.otpForm.valid){

    }
  }
  check(event){
    if (event.target.value.length==4){
      this._apiService.getRequestWithoutbody('api/v1/admin/getProfile').subscribe(response => {
    
        console.log("response",response)
        
      
        console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
        
      },(err: any) => {
        this._commService.errorMsg(err.error.message)
        this._commService.hideSpinner()
      })
  
      

    }
  }

  onCancel() {
    // this.dialog.close();
  }

  onOtpChange(otp) {
    this.otp = otp;
  }

  onProcced() {
    if(this.otp.length == 4) {
      // this.dialog.close(this.otp);
    }
  } 
  onReset() {
  
  }

}
