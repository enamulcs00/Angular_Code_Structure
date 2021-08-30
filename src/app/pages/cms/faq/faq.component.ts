import { Component, OnInit } from '@angular/core';
import {  Input } from '@angular/core'

import { ActivatedRoute, Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

 import { FormBuilder, FormGroup, Validators,ValidationErrors, ValidatorFn} from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';

// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../service/api.service';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from '../../../service/common.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  @Input('item') public items;
  faq1:any[]=[];
  addFaq:FormGroup
  addForm:FormGroup
  editForm:FormGroup
  isSubmit:boolean=false
  cmsDetails: any;
  isSubmitted: boolean=false;
  userId: any;
  particularValue: any;

  constructor(private router: Router,  private modalService:NgbModal,  private _apiService:ApiService, private _commService: CommonService, private fb:FormBuilder) { }

  ngOnInit(): void {
    setTimeout(() => {
       this.getFaq()
      console.log("yyyyyyyyyyyyyyyyyyy")
      console.log("ooooooooooooooooooooooo", this.items )
      this.editForm=this.fb.group({
        question: ['', [Validators.required ]],
        answer: ['', [Validators.required ]],
        
      })
      this.addForm=this.fb.group({
        question1: ['', [Validators.required ]],
        answer1: ['', [Validators.required ]],
        
      })
       
      
    },2000);
    
  
  }
  // add(){ 
  //   let row = document.createElement('div');   
  //     row.className = 'bg-light p-3 mb-3'; 
  //     row.innerHTML = ` 
  //     <div class="form-group">        
  //     <input type="text" class="form-control" placeholder="Add Quetions">
  //     </div>
  //     <div class="">      
  //     <textarea class="form-control" rows="3" placeholder="Add Answer here"></textarea>
  //     </div>
  //     `; 
  //     document.querySelector('.showInputField').appendChild(row); 
  // } 
  getFaq(){
    console.log("777777777777777777777777777");
    
    this.faq1=[]
    this.items.faq.forEach(element => {
      this.faq1.push( {question:element.question,
        answer:element.answer,
        _id:element._id,
        

       
     })
    })
  


    console.log(this.faq1,"jjjjjjjjjjjjjjjjjjjjjjjj");
  }
  getAllCms(){
    this._apiService.getRequestWithoutbody('api/v1/admin/getCms').subscribe(response => {
    
      console.log("responseeeeeeeeeeee",response)
      this.items=response['data'];
      this.getFaq()
      
      console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
      
    },(err: any) => {
      this._commService.errorMsg(err.error.message)
    })

    

  }
  editFaq(userDetail,id){
    console.log(id,"jjjyjggggggggggggggggggggggggggggggggggggggggggggggggggggggg");
    // this.editForm.reset()
    this.isSubmitted=false
    
    this.modalService.open(userDetail, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
    this.userId=id
     this.getuserbyId(id)

  }

getuserbyId(id){
  const params ={
    "id":id


  }
   
  this._apiService.postRequest('api/v1/admin/getFaqById', params).subscribe((response:any) => {
    console.log(response)
    this.particularValue=response['data'];
    // this._commService.successMsg(response.message)
    this.editForm.patchValue({
      question:this.particularValue[0].faq[0].question,
      answer:this.particularValue[0].faq[0].answer

    })


   
  
   
   
    
  },(err: any) => {
    this._commService.errorMsg(err.message)
  });

}
updateFaq(){
  this.isSubmitted=true
  if(this.editForm.valid && this.isSubmitted){
  const params={
    "id":this.userId,
    "faqUpdate":{
      "question":this.editForm.value.question  ,
      "answer":this.editForm.value.answer
    }
    
  }
  this._apiService.postRequest('api/v1/admin/addFaq', params).subscribe((response:any) => {
    console.log(response)
    this.isSubmitted=false
    this.modalService.dismissAll()
    this._commService.successMsg(response.message)
   
    this.getAllCms()

   
  
   
   
    
  },(err: any) => {
    this._commService.errorMsg(err.message)
  });


}}

  addnewFaq(usersDetail){
    this.addForm.reset()
    this.isSubmit=false
    this.modalService.open(usersDetail, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});

  }
  AddsFaq(){
    this.isSubmit=true
    if(this.addForm.valid && this.isSubmit){
      const params={
      
        "faq":{
          "question":this.addForm.value.question1  ,
          "answer":this.addForm.value.answer1
        }
        
      }
      this._apiService.postRequest('api/v1/admin/addFaq', params).subscribe((response:any) => {
        console.log(response)
        this.modalService.dismissAll()
        this._commService.successMsg(response.message)
     
          this.getAllCms()
  
       
      
       
       
        
      },(err: any) => {
        this._commService.errorMsg(err.message)
      });
  
  

    }

  }
  deleteFaq(id){
    const reqbody={"toDelete":id }
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this ',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
     
  
      
      if (result.isConfirmed) {
        this._apiService.postRequest('api/v1/admin/addFaq', reqbody).subscribe((response:any) => {
       
          this.getAllCms()
          this._commService.successMsg(response.message);
    
       
         
          
        });
    
   
      } else if (result.dismiss === Swal.DismissReason.cancel) {
       
      }
    })

  

  }

 
  
  }


