import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
    let isBasic = false;
    let isOnboarding = false;
    let verifyndchangepass= false;
    let isAuth = localStorage.user ? true : false;
    if (next.routeConfig.path === '/authentication/login'  || next.routeConfig.path === '/authentication/forgotpwd' ) {
      isOnboarding = true;
    }
    
    if (isOnboarding && isAuth) { 
      isBasic = false;
       return this.router.navigate(['/dashboard/dashboard']);} 
    if (isOnboarding && !isAuth) { isBasic = true; }
    if (!isOnboarding && isAuth) { isBasic = true; }
    if (!isOnboarding && !isAuth ) {
       isBasic = false; 
       return this.router.navigate(['/authentication/login']);}
      //  if (!isOnboarding && !isAuth && verifyndchangepass) {
      //   isBasic = true; }

    return isBasic;
  }
}
