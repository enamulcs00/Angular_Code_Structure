import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { FormBuilder, FormGroup, Validators,ValidationErrors, ValidatorFn} from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../service/api.service';
import { CommonService } from '../../service/common.service';
import { OtpComponent } from '../otp/otp.component';

@Component({
  selector: 'app-changepwd',
  templateUrl: './changepwd.component.html',
  styleUrls: ['./changepwd.component.css']
})
export class ChangepwdComponent implements OnInit {
  changePwdForm: FormGroup;
  isSubmitted:boolean=false

  constructor(public router: Router, private http:HttpClient, private dialog:MatDialog, private fb:FormBuilder, private _apiService:ApiService, private _commService:CommonService) { }

  ngOnInit(): void {
    this.changePwdForm=this.fb.group({
      password:["",[Validators.required, Validators.minLength(8)]],
       confirmpassword:["", [Validators.required ]]
       

    
      },
      {
        validator: this._commService.MustMatch(
          "password",
          "confirmpassword"
        ),
      }
      
      )
  }
  updatePwd(){
    this.isSubmitted=true
    if(this.isSubmitted && this.changePwdForm.valid){
      const obj={
        "password":this.changePwdForm.value.password,
      }
      this._apiService.postRequest('api/v1/admin/setPassword', obj).subscribe((response:any) => {
        localStorage.clear()
      this._commService.successMsg(response.message);
       this.router.navigate(['/authentication/login']);
    },(err: any) => {
      console.log(err);
       this._commService.errorMsg("Invalid")
      this._commService.hideSpinner()
    });
}
      
    }
  

}
