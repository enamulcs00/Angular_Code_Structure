import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

 import { FormBuilder, FormGroup, Validators,ValidationErrors, ValidatorFn} from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../service/api.service';
import { CommonService } from '../../../service/common.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  url: any=''
  isSubmitted:boolean=false
  submitted:boolean=false
  updateProfile:FormGroup
  changePasswordForm:FormGroup
  active = 1;
  profileDetails: any;
  constructor(private router:Router, private _apiService:ApiService, private _commService:CommonService, private fb:FormBuilder, private routes:ActivatedRoute  ) { }

  ngOnInit(): void {
    this.getProfileDetails()
    
     this.updateProfile=this.fb.group({

      name:[null, [Validators.required,  Validators.minLength(2),Validators.maxLength(20),Validators.pattern("[a-zA-Z ]*")]],
      email:[null, [Validators.required,  Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      image:[null, [Validators.required ]],
      phone:[null, [Validators.required,  Validators.minLength(7),Validators.maxLength(15),  Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]



     })
     this.changePasswordForm = this.fb.group(
      {
        // email: ["", [Validators.required, Validators.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}")]],
        oldPassword: ["", [Validators.required]],
        password: ["", [Validators.required, Validators.minLength(8)]],
        confirmPassword: ["", [Validators.required]],
      },
      {
        validator: this._commService.MustMatch(
          "password",
          "confirmPassword"
        ),
      }
    );
 
  }
  onChange(event){
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.readAsDataURL(event.target.files[0]); 
  
      reader.onload = (event) => { 
        this.url = event.target.result;
      }
      const formData = new FormData();
      formData.append("photo", event.target.files[0]);
      
      // this.loading.loadingTrueCircle();
          this._apiService.postRequest('api/v1/uploadFile',formData).subscribe((res: any) => {
          
        if (!res.error) {
          console.log('uploadFile  result:',res);
          this.url=res.data
         this.updateProfile.patchValue({image:res.data});   
          
        } else {
          console.log('error keys')
        }
        },(err:any)=>{
          // this.loading.loadingFalseCircle();
          this._commService.errorMsg(err.error.message);
          this._commService.hideSpinner()
        })
      
        }
    
  
  
  }
    
     

  
  getProfileDetails(){
    this._apiService.getRequestWithoutbody('api/v1/admin/getProfile').subscribe(response => {
    
      console.log("response",response)
      this.profileDetails=response['data'];
      this.updateProfile.patchValue({
        name:this.profileDetails.name,
        email:this.profileDetails.email,
        phone:this.profileDetails.phone,
        image:this.profileDetails.image

      })
      this.url=this.profileDetails.image;
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
  profileUpdate(){
    console.log("888888888888888888888")
    this.isSubmitted=true
    if(this.isSubmitted && this.updateProfile.valid ){
      this._apiService
      .putRequest("api/v1/admin/updateProfile", this.updateProfile.value)
      .subscribe((response:any) => {
        console.log(response);
        this._commService.imageFlag.next("Flag");
         this.router.navigate(["/dashboard/dashboard"]);
        this._commService.successMsg(response.message);
      },(err: any) => {
        if(err.error.message)
        this._commService.errorMsg(err.error.message)
        else{
          this._commService.errorMsg("No Internet Connection")
        }
        this._commService.hideSpinner()
      }
      );
  } 

    }
  
  onSubmit() {
    this.submitted = true;
    if (this.changePasswordForm.valid && this.submitted) {
     
      this._apiService
        .postRequest("api/v1/admin/changePassword", this.changePasswordForm.value)
        .subscribe((response) => {
          console.log(response);
           this.router.navigate(["/dashboard/dashboard"]);
          this._commService.successMsg(response["message"]);
        }
        ,(err: any) => {
          if(err.error.message)
          this._commService.errorMsg(err.error.message)
          else{
            this._commService.errorMsg("No Internet Connection")
          }
          this._commService.hideSpinner()
        });
    } 
  }
}



