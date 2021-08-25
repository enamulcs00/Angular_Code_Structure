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
  groupFormDetails: any;
  groupForm:FormGroup
  cadenceForm:FormGroup
  cadenceDetails: any;

  constructor(private router: Router, private _apiService:ApiService, private _commService: CommonService, private fb:FormBuilder) { }

  ngOnInit(): void {
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
    })

    

  }
  getCadence(){
    this._apiService.getRequestWithoutbody('api/v1/admin/getCadence').subscribe(response => {
    
      console.log("response",response)
      this.cadenceDetails=response['data'];
      
      console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
      
    },(err: any) => {
      this._commService.errorMsg(err.error.message)
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
    this._apiService.putRequest('api/v1/admin/activeInactiveGroupForm',obj).subscribe(response => {
    
      console.log("response",response)
      this._commService.successMsg("Updated Successfully")
      this.getGroupForm()

     
      
      console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
      
    },(err: any) => {
      this._commService.errorMsg(err.error.message)
    })

    

  }
  updateCadence(){
    const obj={
      "weekly":this.cadenceForm.value.weekly,
      "biWeekly":this.cadenceForm.value.biWeekly,
      "monthly":this.cadenceForm.value.monthly,
      "quaterly":this.cadenceForm.value.quaterly
     

    }
    this._apiService.putRequest('api/v1/admin/activeInactiveCadence',obj).subscribe(response => {
    
      console.log("response",response)
      this._commService.successMsg("Updated Successfully")
      this.getCadence()

     
      
      console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
      
    },(err: any) => {
      this._commService.errorMsg(err.error.message)
    })

  }


}
