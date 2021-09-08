import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

 import { FormBuilder, FormGroup, Validators,ValidationErrors, ValidatorFn} from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../service/api.service';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  addSubAdmin:FormGroup
  isSubmitted:boolean=false
  url: any=''
  permissionArray:any[]=[];

  constructor(private router:Router, private _apiService:ApiService, private _commService:CommonService, private fb:FormBuilder, private routes:ActivatedRoute) { }

  ngOnInit(): void {
    this.addSubAdmin=this.fb.group({
      name:["", [Validators.required,  Validators.minLength(2),Validators.maxLength(20),  Validators.pattern(/^[a-zA-Z]*$/)]],
      phone:["",[Validators.required, Validators.minLength(7),Validators.maxLength(15),  Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      email:["",[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password:["",[Validators.required,Validators.minLength(8),Validators.maxLength(20)]],
      image:["",[Validators.required]]
    })
    this.permissionArray.push( {label:'Dashboard',
    isView:true,
    isAdd:false,
    isEdit:false,
    isDelete:false,
    }, {label:'Users',
    isView:false,
    isAdd:false,
    isEdit:false,
    isDelete:false,
    },
  
    {label:'Notification',
    isView:false,
    isAdd:false,
    isEdit:false,
    isDelete:false,
    },
    {label:'Group Form',
    isView:false,
    isAdd:false,
    isEdit:false,
    isDelete:false,
    },
    {label:'CMS',
    isView:false,
    isAdd:false,
    isEdit:false,
    isDelete:false,
    },
    
  
    )
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
        //  this.userForm.patchValue({image:res.data});   
          
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
  addSubadmin(){
    this.isSubmitted=true
    if(this.isSubmitted && this.addSubAdmin.valid){
      var data = {
       
        "name":this.addSubAdmin.value.name,
       
    
        "email":this.addSubAdmin.value.email,
        "phone":this.addSubAdmin.value.phone,
        "password":this.addSubAdmin.value.password,
      
        "image":this.url,
        "permission":this.permissionArray
      }
      this._apiService.postRequest('api/v1/admin/addSubAdmin',data).subscribe((response:any) => {
        console.log(response)
  
      
       this._commService.successMsg(response.message);

        this.router.navigateByUrl("subadmin/adminlist");
      
      //  this.allProductsCount = response['data'].count
       
        
      },(err: any) => {
        this._commService.errorMsg(err.error.message)
        this._commService.hideSpinner()
      });
  
  
  
    }

    
  }
  check(data)
  {
    if(data.isAdd || data.isEdit || data.isDelete){
      data.isView=true
    }
  }


}
