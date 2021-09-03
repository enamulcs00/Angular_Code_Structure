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
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.css']
})
export class LegalComponent implements OnInit {
  @Input('item') public items;

  constructor(private router: Router, private _apiService:ApiService, private _commService: CommonService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  legal(){
    var params={
      "legal":this.items.legal || ""

    }
    this._apiService
    .postRequest("api/v1/admin/addCms", params)
    .subscribe((response:any) => {
      console.log(response);
  
      this._commService.successMsg(response.message);
    });

  }

}
