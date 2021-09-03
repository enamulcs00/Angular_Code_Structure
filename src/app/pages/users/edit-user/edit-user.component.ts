import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

 import { FormBuilder, FormGroup, Validators,ValidationErrors, ValidatorFn} from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../service/api.service';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  isSubmitted:boolean=false
  userForm:FormGroup
  type: any;
  userId: any;
  userDetails: any;
  url: any=''

  constructor(private router:Router, private _apiService:ApiService, private _commService:CommonService, private fb:FormBuilder, private routes:ActivatedRoute ) { }

  ngOnInit(): void {
    this.type = this.routes.snapshot.paramMap.get('type');
    console.log(this.type,"uuuuuuuuuuuuuuuuuuuuuuuu");
    
    if (this.type === 'edit' ) {
      this.userId = this.routes.snapshot.paramMap.get('id');
      console.log(this.userId,"yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");
   
  }
  this.getUsers()
  this.userForm=this.fb.group({

    name:[null, [Validators.required, Validators.minLength(2),Validators.maxLength(20),  Validators.pattern(/^[a-zA-Z]*$/)]],
    dob:[null, [Validators.required]],
    phone:[null, [Validators.required, Validators.minLength(7),Validators.maxLength(15),  Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    email:[null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    image:[null, [Validators.required]],


   })


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
       this.userForm.patchValue({image:res.data});   
        
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
getUsers(){
  const obj={
    "id":this.userId
  }
  this._apiService.postRequest('api/v1/admin/getUserById',obj).subscribe((response:any) => {
    
    console.log("response",response)
    this.userDetails=response.data
    this.userForm.patchValue({
      name:this.userDetails.name,
      phone:this.userDetails.phone,
      email:this.userDetails.email,
      dob:this.userDetails.dob,
      image:this.userDetails.image

    });
    this.url=this.userDetails.image;
    this.userForm.get('dob').patchValue(this.formatDate(new Date(this.userDetails.dob)));
  
    console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
    
  },(err: any) => {
    this._commService.errorMsg(err.error.message)
    this._commService.hideSpinner()
  })

}
private formatDate(date) {
  const d = new Date(date);
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  const year = d.getFullYear();
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  return [year, month, day].join('-');
}
editUser(){
  this.isSubmitted=true
  if(this.isSubmitted && this.userForm.valid){
    var data = {
      "id":this.userId,
      "name":this.userForm.value.name,
      "dob":this.userForm.value.dob,
  
      "email":this.userForm.value.email,
      "phone":this.userForm.value.phone,
    
      "image":this.url
    }
    this._apiService.putRequest('api/v1/admin/editUser',data).subscribe((response:any) => {
      console.log(response)

    
     this._commService.successMsg(response.message);
      this.router.navigateByUrl("users/userlist");
    
    //  this.allProductsCount = response['data'].count
     
      
    },(err: any) => {
      this._commService.errorMsg(err.error.message)
      this._commService.hideSpinner()
    });



  }
}
}
