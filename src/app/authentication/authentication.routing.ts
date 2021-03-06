import { Routes } from '@angular/router';

import { NotFoundComponent } from './404/not-found.component';
import { LockComponent } from './lock/lock.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { SignupComponent } from './signup/signup.component';
import { Signup2Component } from './signup2/signup2.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { ResetpwdComponent } from './resetpwd/resetpwd.component';
import { RestComponent } from './rest/rest.component';
import{OtpComponent} from './otp/otp.component'
import { ChangepwdComponent } from './changepwd/changepwd.component'
import {AuthGuard} from '../service/auth-guard/auth.guard'

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '404',
        component: NotFoundComponent
      },
      {
        path: 'lock',
        component: LockComponent
      },
      {
        path: 'login',

        component: LoginComponent,
          //  canActivate: [AuthGuard],
      },
      {
        path: 'otp',

        component: OtpComponent,
          //  canActivate: [AuthGuard],
      },
      {
        path: 'changepwd',

        component: ChangepwdComponent,
          //  canActivate: [AuthGuard],
      },
      {
        path: 'reset',

        component: RestComponent,
          //  canActivate: [AuthGuard],
      },
      {
        path: 'forgotpwd',
        component: ForgotpwdComponent,
          // canActivate: [AuthGuard],
      },
    
      {
        path: 'login2',
        component: Login2Component
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'signup2',
        component: Signup2Component
      }
    ]
  }
];
