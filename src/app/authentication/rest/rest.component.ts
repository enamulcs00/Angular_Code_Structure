import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { CommonService } from '../../services/services/common.service';
// import { HttpService } from '../../services/services/http.service';
@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
    // this.form = this.formBuilder.group({
    //   password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
    //   confirmpassword: ['', [Validators.required,]]
    // },
    //   {
    //     validator: this.cm.MustMatch('password', 'confirmpassword'),
    //   })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }


}
