import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

 import { FormBuilder, FormGroup, Validators,ValidationErrors, ValidatorFn} from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../service/api.service';
import { CommonService } from '../../../service/common.service';
import { ThemeService } from 'ng2-charts';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {
  editSubAdmin: FormGroup;
  subAdminDetails: any;
  permissionArray:any[]=[]
  isSubmitted:boolean=false
  url: any=''
  userId: string;

  constructor(private router:Router, private _apiService:ApiService, private _commService:CommonService, private fb:FormBuilder, private routes:ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.routes.snapshot.paramMap.get('id');
    this.editSubAdmin=this.fb.group({
      name:["", [Validators.required,  Validators.minLength(2),Validators.maxLength(20),  Validators.pattern("[a-zA-Z ]*")]],
      phone:["",[Validators.required, Validators.minLength(7),Validators.maxLength(15),  Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      email:["",[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
   
      image:["",[Validators.required]]
    })
    this.getSubAdmin()
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
          this.editSubAdmin.patchValue({image:res.data});   
          
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

  getSubAdmin(){
    const obj={
      "id":this.userId
    }
    this._apiService.postRequest('api/v1/admin/getSubAdminById',obj).subscribe(response => {
    
      console.log("response",response)
    
     
      this.subAdminDetails=response['data'];
      this.url=this.subAdminDetails.image
    
      this.editSubAdmin.patchValue({
        name:this.subAdminDetails.name,
        email:this.subAdminDetails.email,
        phone:this.subAdminDetails.phone,
        image:this.subAdminDetails.image,
       
       
        
        
    
     
        


      })
    
    
     
    
     
      this.subAdminDetails.permission.forEach(element => {
        this.permissionArray.push({
          label:element.label,
          isAdd:element.isAdd,
          isView:element.isView,
          isEdit:element.isEdit,
          isDelete:element.isDelete,
          _id:element._id

        })
       
        
      });
      console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",this.permissionArray);
      
    },(err: any) => {
      if(err.error.message)
      this._commService.errorMsg(err.error.message)
      else{
        this._commService.errorMsg("No Internet Connection")
      }
      this._commService.hideSpinner()
    })

    


  }
  check(data){
    if(data.isAdd || data.isEdit || data.isDelete)
    {
      data.isView=true
    }

  }
  updateSubAdmin(){
    console.log("greattttttttttttttttttttttttttttttttttttttttttttttttt")
    this.isSubmitted=true
    if(this.isSubmitted && this.editSubAdmin.valid  ){
      console.log("tttttttttttttttttttttttttttttttttttttttttttttttt")
      var data={
        subAdminId:this.userId,
        name:this.editSubAdmin.value.name,
        email:this.editSubAdmin.value.email,
        phone:this.editSubAdmin.value.phone,
       
        image:this.url,
        permission:this.permissionArray
        

      }
      this._apiService.putRequest('api/v1/admin/editSubAdmin',data).subscribe((response:any) => {
        console.log(response)
  
      
       this._commService.successMsg(response.message);
        this.router.navigateByUrl("subadmin/adminlist");
      
      //  this.allProductsCount = response['data'].count
       
        
      },(err: any) => {
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
