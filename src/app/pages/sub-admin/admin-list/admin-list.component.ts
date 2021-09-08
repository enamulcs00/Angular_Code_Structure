import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute, Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

 import { FormBuilder, FormGroup, Validators,ValidationErrors, ValidatorFn} from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';


import { ApiService } from '../../../service/api.service';
import { CommonService } from '../../../service/common.service';
import { PageEvent } from '@angular/material/paginator';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  page: number=0;
  limit: number=10;
  searchText:any = '';
  subAdminDetails: any;
  subAdminCount: any;
  type: string="";

  constructor(private modalService: NgbModal, private router:Router, private _apiService:ApiService, private _commService:CommonService, private fb:FormBuilder, private routes:ActivatedRoute) { }

  ngOnInit(): void {
     this.getSubAdmin('')
  }
  // openWindowCustomClass(content3) {
  //   this.modalService.open(content3, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  // }
  // userprofileModal(userDelete) {
  //   this.modalService.open(userDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  // }
  // userDeleteModal(userDelete) {
  //   this.modalService.open(userDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  // }
  // userDetailModal(userDetail) {
  //   this.modalService.open(userDetail, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  // }
  // addUserModal(addUser) {
  //   this.modalService.open(addUser, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  // }
  // vendorConfirmModal(vendorConfirm) {
  //   this.modalService.open(vendorConfirm, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  // }
  // vendorUnconfirmModal(vendorUnconfirm) {
  //   this.modalService.open(vendorUnconfirm, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  // }
  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return  `with: ${reason}`;
  //   }
  // }
  changeStatus(event,id1){
    console.log(event);
    
    const reqbody={"subAdminId": id1,
    
    "isBlocked":event.checked}
    console.log(reqbody);
    this._apiService.putRequest('api/v1/admin/editSubAdmin',reqbody).subscribe((response:any) => {
      this._commService.successMsg(response.message);
     

    //  this.AllProducts=response['data'].productData
    //  this.totalProducts = response['data'].count
    //   // this.getAllCategories()
    //  console.log(this.AllProducts);
      
    },(err: any) => {
      this._commService.errorMsg(err.error.message)
      this._commService.hideSpinner()
    });
  }

  getSubAdmin(event){
    

    console.log("checkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",event)
    if(event!='')
    {
      this.page=0
    }
    // if(event=='')
    // {
    //   this.page=0;
    //   this.type=""
    // }
    // if(event && this.type == '') {
    
    //   this.page = 0;
    //   this.type = "";
    //  } 
    //  if(event=="active"){
    //   this.type="active"
      
    //   console.log("jjjjjjjjjjjjj",this.type)
    // }
    // if(event=="inActive"){
    //   this.type="inActive"
    //   console.log("ppppppppppppp",this.type, "oooooooooooooooooooooooooooooooooooooooo")
    // }
    
    const reqbody={  "search": this.searchText.trim(), "page": 0,"limit":this.limit }
    this._apiService.postRequest('api/v1/admin/getSubAdmin',reqbody).subscribe((response:any) => {
    
      console.log("response",response)
      this.subAdminDetails=response.data.adminData;
      this.subAdminCount=response.data.count
    
      console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii"); 
      
    },(err: any) => {
      this._commService.errorMsg(err.error.message)
         this._commService.hideSpinner()
    })
    
  }
  handlePageEvent(event:PageEvent){
    this.limit = event.pageSize;
    this.page = event.pageIndex;
    const reqbody={  "search": this.searchText.trim(), "page": this.page,"limit":this.limit}
    this._apiService.postRequest('api/v1/admin/getSubAdmin',reqbody).subscribe((response:any) => {
    
      console.log("response",response)
      this.subAdminDetails=response.data.userData;
      this.subAdminCount=response.data.count
    
      console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
      
    },(err: any) => {
      this._commService.errorMsg(err.error.message)
      this._commService.hideSpinner()
    })
  }
  deleteUser(id){

  
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this ',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
     
  
      
      if (result.isConfirmed) {
        const obj={
          "id":id,
          "isDeleted": true
        }
        this._apiService.putRequest('api/v1/admin/deleteSubAdmin',obj).subscribe((response:any) => {
    
          console.log("response",response)
          this._commService.successMsg(response.message)
          this.getSubAdmin('')

        
        
        
          
        },(err: any) => {
          this._commService.errorMsg(err.error.message)
             this._commService.hideSpinner()  
        })
        
  
        
       
         
          
     
    
   
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Swal.fire(
        //   'Cancelled',
        //   'Your imaginary file is safe :)',
        //   'error'
        // )
      }
    })


  }


}
