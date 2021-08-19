import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

import { FormBuilder, FormGroup, Validators,ValidationErrors, ValidatorFn} from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../service/api.service';
import { CommonService } from '../../service/common.service';
declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSubmitted:boolean=false
  loginForm:FormGroup
  constructor(public router: Router,private fb:FormBuilder, private _apiService:ApiService, private _commService:CommonService) {}

  ngOnInit() {
    this.loginForm=this.fb.group({
      email:["",[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password:["", Validators.required, Validators.minLength(8) ]

    })
  //  this.clickbtn();
  }

//   ngAfterViewInit() {
//     $(function() {
//             $(".preloader").fadeOut();
//         });
//         $('#to-recover').on("click", function() {
//             $("#loginform").slideUp();
//             $("#recoverform").fadeIn();
//         });
//   }



//   onLoggedin() {
//     localStorage.setItem('isLoggedin', 'true');
//   }
// clickbtn(){
//   var forgetpws = document.getElementById("to-recover"); 
//   var recoverform = document.getElementById("recoverform"); 
//   var login = document.getElementById("loginform"); 
//   var resetpw = document.getElementById("resetpwd"); 
 
//   forgetpws.addEventListener("click" ,()=>{
//     recoverform.classList.add("d-block");
//     login.classList.add('d-none');
//     login.classList.remove('d-block');
//   })
//   resetpw.addEventListener("click" ,()=>{
//     recoverform.classList.remove("d-block")
//     recoverform.classList.add("d-none");
//     login.classList.add('d-block');
//   })
// }
onLoggedin(){
  console.log("ooooooooooooooooooooooooooo");
  
  this.isSubmitted=true
  if(this.loginForm.valid && this.isSubmitted==true){
    const loginDetails={
      email:this.loginForm.value.email,
      password:this.loginForm.value.password

    }
    this._apiService.postRequest('api/v1/admin/login', this.loginForm.value).subscribe(response => {
      localStorage.clear();
      console.log("response",response)
      const user = response['data'];
            localStorage.setItem("accessToken", JSON.stringify(user.token));
            localStorage.setItem('user', JSON.stringify(user)); 
      
              this.router.navigate(['/dashboard/dashboard']);
            },(err: any) => {
              this._commService.errorMsg(err.error.message)
            });
        
              
    




  }

}



}
