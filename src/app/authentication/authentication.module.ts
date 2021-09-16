import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgOtpInputModule } from  'ng-otp-input';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NotFoundComponent } from './404/not-found.component';
import { LockComponent } from './lock/lock.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { SignupComponent } from './signup/signup.component';
import { Signup2Component } from './signup2/signup2.component';

import { AuthenticationRoutes } from './authentication.routing';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { ResetpwdComponent } from './resetpwd/resetpwd.component';
import { RestComponent } from './rest/rest.component';
import{OtpComponent} from './otp/otp.component';
import { ChangepwdComponent } from './changepwd/changepwd.component'
// import { NgxOtpInputModule } from 'ngx-otp-input';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthenticationRoutes),
    NgbModule,
    FormsModule,
  
    MatDialogModule,
    ReactiveFormsModule,
    NgOtpInputModule

  ],
  declarations: [
    NotFoundComponent,
    LoginComponent,
  
    SignupComponent,
    LockComponent,
    OtpComponent,
    Login2Component,
    Signup2Component,
    ForgotpwdComponent,

    ResetpwdComponent,

    ChangepwdComponent
  ]
})
export class AuthenticationModule {}
