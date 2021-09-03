import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

 import { FormBuilder, FormGroup, Validators,ValidationErrors, ValidatorFn} from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../service/api.service';
import { CommonService } from '../../../service/common.service';
import Swal from 'sweetalert2'
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  closeResult: string;
  page: number=0;
  limit: number=10;
  searchText:any = '';

  //table: any
  action:string;
  userDetails: any;
  userDetailsCount: any;
  constructor(private router:Router, private _apiService:ApiService, private _commService:CommonService, private fb:FormBuilder, private routes:ActivatedRoute  ) { }


 
  ngOnInit(): void {
    this.getAllUsers('')
  }
  getAllUsers(event){
    if(event != '') {
      this.searchText = event.target.value
      // this.serial = 0;
      this.page = 0;
     } 
     const reqbody={  "search": this.searchText.trim(), "page": 0,"limit":this.limit}
    this._apiService.postRequest('api/v1/admin/getAllUser',reqbody).subscribe((response:any) => {
    
      console.log("response",response)
      this.userDetails=response.data.userData;
      this.userDetailsCount=response.data.count
    
      console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
      
    },(err: any) => {
      this._commService.errorMsg(err.error.message)
      this._commService.hideSpinner()
    })
  }
  // exportcsv(){
  //   this._apiService.getRequestWithoutbody('api/getVendorCsv').subscribe((res:any) => {
  //     console.log(res,"allvendors");
      
  //     window.open(res.data.redirection);
  //   })
      
    
  // }
  activeUsers(){
    const reqbody={ "type":"active" }
    this._apiService.postRequest('api/v1/admin/getAllUser',reqbody).subscribe((response:any) => {
    
      console.log("response",response)
      this.userDetails=response.data.userData;
      this.userDetailsCount=response.data.count
    
      console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
      
    },(err: any) => {
      this._commService.errorMsg(err.error.message)
      this._commService.hideSpinner()
    })

  }
  inactiveUsers(){
    const reqbody={ "type":"inactive" }
    this._apiService.postRequest('api/v1/admin/getAllUser',reqbody).subscribe((response:any) => {
    
      console.log("response",response)
      this.userDetails=response.data.userData;
      this.userDetailsCount=response.data.count
    
      console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
      
    },(err: any) => {
      this._commService.errorMsg(err.error.message)
      this._commService.hideSpinner()
    })

  }
  changeStatus(event,id1){
    console.log(event);
    
    const reqbody={"id": id1,
    
    "isBlocked":event.checked}
    console.log(reqbody);
    this._apiService.putRequest('api/v1/admin/editUser',reqbody).subscribe((response:any) => {
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
  handlePageEvent(event:PageEvent){
    this.limit = event.pageSize;
    this.page = event.pageIndex;
    const reqbody={  "search": this.searchText.trim(), "page": this.page,"limit":this.limit}
    this._apiService.postRequest('api/v1/admin/getAllUser',reqbody).subscribe((response:any) => {
    
      console.log("response",response)
      this.userDetails=response.data.userData;
      this.userDetailsCount=response.data.count
    
      console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
      
    },(err: any) => {
      this._commService.errorMsg(err.error.message)
      this._commService.hideSpinner()
    })
  }
  // people = [
  //   { 
  //     serial_no:'1',
  //     firstname: 'Sandy', 
  //     lastname: 'Doe',  
  //     dob: "20-04-1993",    
  //     contact:"+91-33434343",
  //     email:"sand@example.com",
  //     address:"#454 1st Block, Rammurthy, Bangalore-560016",
  //     status:"",
  //     action:"1",      
  //   },
  //   { 
  //     serial_no:'2',
  //     firstname: 'Rohan', 
  //     lastname: 'Arya',  
  //     dob: "20-04-1993",   
  //     contact:"+91-33434343",
  //     email:"sand@example.com",  
  //     address:"#454 1st Block, Rammurthy, Bangalore-560016",
  //     status:"",
  //     action:"1",      
  //   },
  //   { 
  //     serial_no:'3',   
  //     firstname: 'john', 
  //     lastname: 'Root',  
  //     dob: "20-04-1993",   
  //     contact:"+91-33434343",
  //     email:"sand@example.com", 
  //     address:"#454 1st Block, Rammurthy, Bangalore-560016",   
  //     status:"",
  //     action:"1",      
  //   },
   
  // ]
  deleteUser(id){

  
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this ',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete!',
      cancelButtonText: 'No, dont Delete'
    }).then((result) => {
     
  
      
      if (result.isConfirmed) {
        const obj={
          "user":id,
          "isDeleted": true
        }
        this._apiService.putRequest('api/v1/admin/deleteUser',obj).subscribe((response:any) => {
    
          console.log("response",response)
          this._commService.successMsg(response.message)
          this.getAllUsers('')

        
        
        
          
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
