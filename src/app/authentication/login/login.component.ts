import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  constructor(public router: Router) {}

  ngOnInit() {
    this.clickbtn();
  }

  ngAfterViewInit() {
    $(function() {
            $(".preloader").fadeOut();
        });
        $('#to-recover').on("click", function() {
            $("#loginform").slideUp();
            $("#recoverform").fadeIn();
        });
  }



  onLoggedin() {
    localStorage.setItem('isLoggedin', 'true');
  }
clickbtn(){
  var forgetpws = document.getElementById("to-recover"); 
  var recoverform = document.getElementById("recoverform"); 
  var login = document.getElementById("loginform"); 
  var resetpw = document.getElementById("resetpwd"); 
 
  forgetpws.addEventListener("click" ,()=>{
    recoverform.classList.add("d-block");
    login.classList.add('d-none');
    login.classList.remove('d-block');
  })
  resetpw.addEventListener("click" ,()=>{
    recoverform.classList.remove("d-block")
    recoverform.classList.add("d-none");
    login.classList.add('d-block');
  })
}



}
