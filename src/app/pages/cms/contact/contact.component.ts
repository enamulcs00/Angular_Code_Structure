import { Component, OnInit } from '@angular/core';
import {  Input } from '@angular/core'

import { ActivatedRoute, Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

 import { FormBuilder, FormGroup, Validators,ValidationErrors, ValidatorFn} from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../service/api.service';
import { CommonService } from '../../../service/common.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm:FormGroup
  isSubmitted:boolean=false
  @Input('item') public items;

  constructor(private router: Router, private _apiService:ApiService, private _commService: CommonService, private fb:FormBuilder) {
    
   }

  ngOnInit(): void {
    this.contactForm=this.fb.group({

      address:[null, [Validators.required,  Validators.minLength(2),Validators.maxLength(100)]],
      email:[null, [Validators.required,  Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      phone:[null, [Validators.required,  Validators.minLength(7),Validators.maxLength(15),  Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]



     })
    //  this.contactForm.patchValue({
    //    address:this.item.address,
    //    email:
    //    phone

    //  })
    
    
  }
  updateContacts(){
    this.isSubmitted=true
    if(this.isSubmitted && this.contactForm.valid ){
      

    }

  }

}
