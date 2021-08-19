import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../service/common.service';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, finalize, retry, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetInterceptorService {

  constructor(private router: Router,
    // private toastr: ToastrService,
       private _comm: CommonService
    ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
          this._comm.hideSpinner();
        if (event.status == 211) {
        //  this.toastr.error('Your session is expired, please log in.');
          localStorage.clear();
          return this.router.navigateByUrl('/');
        }
      }
    }));
  }
}
