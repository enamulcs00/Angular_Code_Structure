import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

import { FormBuilder, FormGroup, Validators,ValidationErrors, ValidatorFn} from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../service/api.service';
import { CommonService } from '../../service/common.service';
import { OtpComponent } from '../otp/otp.component';
// import{OtpComponent} from './otp/otp.component'
// import{OtpComponent} from './otp/otp.component'

@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.component.html',
  styleUrls: ['./forgotpwd.component.css']
})
export class ForgotpwdComponent implements OnInit {
  forgotPwdForm: FormGroup;
  isSubmitted:boolean=false

  constructor(public router: Router, private dialog:MatDialog, private fb:FormBuilder, private _apiService:ApiService, private _commService:CommonService) { }

  ngOnInit(): void {
    this.forgotPwdForm=this.fb.group({
      email:["",[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      // password:["", [Validators.required, Validators.minLength(8) ]]

    })
  }
  forgotPwd(){
    this.isSubmitted=true
    console.log("very niceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
    if(this.isSubmitted && this.forgotPwdForm.valid){
      this._apiService.postRequest('api/v1/admin/forgotPassword', this.forgotPwdForm.value).subscribe((response:any) => {

                this._commService.successMsg(response.message);
                this.openDialogs()
  
                // this.router.navigate(['/authentication/login']);
              
           
        
              },(err: any) => {
                this._commService.errorMsg(err.error.message)
                this._commService.hideSpinner()
              });
          
                

    }
  }
  openDialogs(): void {
    const dialogRef = this.dialog.open(OtpComponent, {
      // width: '100px',
      data: { }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    
    });
  }

}
