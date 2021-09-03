import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';

import { NgxSpinnerService } from "ngx-spinner"

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(
    private _toastrService: ToastrManager,private spinner: NgxSpinnerService
  ) { }

  successMsg(message) {
    this._toastrService.successToastr(message, '', {
      closeButton: false,
      toastTimeout: 3000,
      progressBar: true,
      progressAnimation: "decreasing",
      maxShown: 1
    });
  }

  errorMsg(message) {
    this._toastrService.errorToastr(message, '', {
      closeButton: false,
      toastTimeout: 3000,
      progressBar: true,
      progressAnimation: "decreasing",
      maxShown: 1
    });
  }

  showSpinner() {
    console.log("qterlyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy")
    this.spinner.show();
  }

  hideSpinner() {
    this.spinner.hide();
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}


}
