import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

 import { FormBuilder, FormGroup, Validators,ValidationErrors, ValidatorFn} from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../service/api.service';
import { CommonService } from '../../../service/common.service';


@Component({
  selector: 'app-cmslist',
  templateUrl: './cmslist.component.html',
  styleUrls: ['./cmslist.component.css']
})
export class CmslistComponent implements OnInit {
  cmsDetails: any;

  constructor(private router: Router, private _apiService:ApiService, private _commService: CommonService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getAllCms()
  }
  getAllCms(){
    this._apiService.getRequestWithoutbody('api/v1/admin/getCms').subscribe(response => {
    
      console.log("response",response)
      this.cmsDetails=response['data'];
      
      console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
      
    },(err: any) => {
      this._commService.errorMsg(err.error.message)
    })

    

  }

}
