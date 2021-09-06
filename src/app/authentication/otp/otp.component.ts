import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonService } from '../../services/services/common.service';
import { HttpService } from '../../services/services/http.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  config = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      'width': '50px',
      'height': '50px'
    }
  };

  message: string;
  otp: any;
  submitted: boolean = false;;

  constructor(public dialog: MatDialogRef<OtpComponent>,
    private http: HttpService,
    public cm: CommonService) { }

  ngOnInit() {
  }

  onCancel() {
    this.dialog.close();
  }

  onOtpChange(otp) {
    this.otp = otp;
  }

  onProcced() {
    if(this.otp.length == 4) {
      this.dialog.close(this.otp);
    }
  } 
  onReset() {
    this.submitted = true;
    var params = {
      'email': localStorage.userEmail.toLowerCase()
    }
    this.http.httpPutWithDataHeaderAndBody('forgotPassword', params).subscribe((res: any) => {
      if (res.code == 200) {
        this.cm.presentsToast('success', res.message);
      }
    })
  }

}
