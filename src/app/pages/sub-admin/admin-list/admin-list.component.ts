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

  constructor(private modalService: NgbModal, private router:Router, private _apiService:ApiService, private _commService:CommonService, private fb:FormBuilder, private routes:ActivatedRoute) { }

  ngOnInit(): void {
    // this.getSubAdmin('')
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
  // getSubAdmin(event){
  //   if(event != '') {
  //     this.searchText = event.target.value
  //     // this.serial = 0;
  //     this.page = 0;
  //    } 
  //    const reqbody={  "search": this.searchText.trim(), "page": 0,"limit":this.limit}
  //   this._apiService.postRequest('api/v1/admin/getAllUser',reqbody).subscribe((response:any) => {
    
  //     console.log("response",response)
  //     this.subAdminDetails=response.data.userData;
  //     this.subAdminCount=response.data.count
    
  //     console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
      
  //   },(err: any) => {
  //     this._commService.errorMsg(err.error.message)
  //   })
    
  // }
  handlePageEvent(event:PageEvent){
    this.limit = event.pageSize;
    this.page = event.pageIndex;
    const reqbody={  "search": this.searchText.trim(), "page": this.page,"limit":this.limit}
    this._apiService.postRequest('api/v1/admin/getAllUser',reqbody).subscribe((response:any) => {
    
      console.log("response",response)
      this.subAdminDetails=response.data.userData;
      this.subAdminCount=response.data.count
    
      console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
      
    },(err: any) => {
      this._commService.errorMsg(err.error.message)
    })
  }
  // deleteUser(id){

  
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: 'You will not be able to recover this ',
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonText: 'Yes, Delete!',
  //     cancelButtonText: 'No, dont Delete'
  //   }).then((result) => {
     
  
      
  //     if (result.isConfirmed) {
  //       const obj={
  //         "user":id,
  //         "isDeleted": true
  //       }
  //       this._apiService.putRequest('api/v1/admin/deleteUser',obj).subscribe((response:any) => {
    
  //         console.log("response",response)
  //         this._commService.successMsg(response.message)
  //         this.getSubAdmin('')

        
        
        
          
  //       },(err: any) => {
  //         this._commService.errorMsg(err.error.message)
  //       })
        
  
        
       
         
          
     
    
   
  //     } else if (result.dismiss === Swal.DismissReason.cancel) {
  //       // Swal.fire(
  //       //   'Cancelled',
  //       //   'Your imaginary file is safe :)',
  //       //   'error'
  //       // )
  //     }
  //   })


  // }

}
