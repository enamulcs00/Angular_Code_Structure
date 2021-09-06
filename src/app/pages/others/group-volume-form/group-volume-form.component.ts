import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

 import { FormBuilder, FormGroup, Validators,ValidationErrors, ValidatorFn} from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../service/api.service';
import { CommonService } from '../../../service/common.service';


@Component({
  selector: 'app-group-volume-form',
  templateUrl: './group-volume-form.component.html',
  styleUrls: ['./group-volume-form.component.scss']
})
export class GroupVolumeFormComponent implements OnInit {
  groupFormDetails: any={};
  groupForm:FormGroup
  cadenceForm:FormGroup
  cadenceDetails: any={};
  a: any;
  b: any;
  add: any;
  edit: any;
  delete: any;

  constructor(private router: Router, private _apiService:ApiService, private _commService: CommonService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.a=JSON.parse(localStorage.getItem('user')).role
   
    this.b=JSON.parse(localStorage.getItem('permissionItems'))
    console.log(this.a,this.b,"nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
    if(this.a==2){
      this.b.forEach(element=>{
        if(element.label=="Group Form"){
          this.add=element.isAdd,
          this.edit=element.isEdit,
          this.delete=element.isDelete
        }
  
      })
      console.log(this.add);
      console.log(this.edit);
      console.log(this.delete);
    }

    this.getGroupForm()
    this.getCadence()
    this.groupForm=this.fb.group({

      saveTheDate:[false, [Validators.required]],
      theHealthCheck:[false, [Validators.required]],
      thePeak:[false, [Validators.required]],
      myPit:[false, [Validators.required]],
      snapshot:[false, [Validators.required]],
      myJam:[false, [Validators.required]],
      reccomendation:[false, [Validators.required]],
      theLesson:[false, [Validators.required]],
      theForecast:[false, [Validators.required]],
      freeSpace:[false, [Validators.required]]



     })
     this.cadenceForm=this.fb.group({

      weekly:[false, [Validators.required]],
      biWeekly:[false, [Validators.required]],
      monthly:[false, [Validators.required]],
      quaterly:[false, [Validators.required]],
      



     })
  }
  getGroupForm(){
    this._apiService.getRequestWithoutbody('api/v1/admin/getGroupForm').subscribe(response => {
    
      console.log("response",response)
      this.groupFormDetails=response['data'];
      
      console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
      
    },(err: any) => {
      this._commService.errorMsg(err.error.message)
      this._commService.hideSpinner()
    })

    

  }
  getCadence(){
    this._apiService.getRequestWithoutbody('api/v1/admin/getCadence').subscribe(response => {
    
      console.log("response",response)
      this.cadenceDetails=response['data'];
      
      console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
      
    },(err: any) => {
      this._commService.errorMsg(err.error.message)
      this._commService.hideSpinner()
    })

    

  }
  updateGroup(){
    const obj={
      "saveTheDate":this.groupForm.value.saveTheDate,
      "theHealthCheck":this.groupForm.value.theHealthCheck,
      "thePeak":this.groupForm.value.thePeak,
      "myPit":this.groupForm.value.myPit,
      "snapshot":this.groupForm.value.snapshot,
      "myJam":this.groupForm.value.myJam,
      "reccomendation":this.groupForm.value.reccomendation,
      "theLesson":this.groupForm.value.theLesson,
      "theForecast":this.groupForm.value.theForecast,
      "freeSpace":this.groupForm.value.freeSpace


    }
    this._apiService.putRequest('api/v1/admin/activeInactiveGroupForm',obj).subscribe((response:any) => {
    
      console.log("response",response)
      this._commService.successMsg(response.message)
      this.getGroupForm()

     
      
      console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
      
    },(err: any) => {
      this._commService.errorMsg(err.error.message)
      this._commService.hideSpinner()
    })

    

  }
  updateCadence(){
    const obj={
      "weekly":this.cadenceForm.value.weekly,
      "biWeekly":this.cadenceForm.value.biWeekly,
      "monthly":this.cadenceForm.value.monthly,
      "quaterly":this.cadenceForm.value.quaterly
     

    }
    this._apiService.putRequest('api/v1/admin/activeInactiveCadence',obj).subscribe((response:any) => {
    
      console.log("response",response)
      this._commService.successMsg(response.message)
      this.getCadence()

     
      
      console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
      
    },(err: any) => {
      this._commService.errorMsg(err.error.message)
      this._commService.hideSpinner()
    })

  }


}
