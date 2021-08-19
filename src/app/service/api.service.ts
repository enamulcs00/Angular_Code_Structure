import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';

import { map, catchError } from "rxjs/operators";
import { Observable } from 'rxjs/internal/Observable';
import { CommonService } from './common.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = environment.baseUrl;

  constructor(private http:HttpClient,private _commService:CommonService, private _router:Router) { }
  isLoggedIn() {
    return this.getToken() !== null;
  }

  getToken() {
    return localStorage.getItem("accessToken");
  }
  
  getRequest(endPoint, reqBody) {
    return this.http.get(`${this.baseUrl}${endPoint}`, reqBody)
 
  }
  getRequestWithoutbody(endPoint) {
    return this.http.get(`${this.baseUrl}${endPoint}`)
 
  }
  postRequest(endPoint, reqBody) {
    return this.http.post(`${this.baseUrl}${endPoint}`, reqBody)

  }
  postRequestById(endPoint,reqBody){
    return this.http.post(`${this.baseUrl}${endPoint}`, reqBody)

  }

  putRequest(endPoint, reqBody) {
    return this.http.put(`${this.baseUrl}${endPoint}`, reqBody)  
 
  }

  deleteRequest(endPoint, reqBody) {
    return this.http.delete(`${this.baseUrl}${endPoint}`, reqBody)
}
}
