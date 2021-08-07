import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  closeResult: string;

  //table: any
  action:string;


 
  ngOnInit(): void {
  }
  people = [
    { 
      serial_no:'1',
      firstname: 'Sandy', 
      lastname: 'Doe',  
      dob: "20-04-1993",    
      contact:"+91-33434343",
      email:"sand@example.com",
      address:"#454 1st Block, Rammurthy, Bangalore-560016",
      status:"",
      action:"1",      
    },
    { 
      serial_no:'2',
      firstname: 'Rohan', 
      lastname: 'Arya',  
      dob: "20-04-1993",   
      contact:"+91-33434343",
      email:"sand@example.com",  
      address:"#454 1st Block, Rammurthy, Bangalore-560016",
      status:"",
      action:"1",      
    },
    { 
      serial_no:'3',   
      firstname: 'john', 
      lastname: 'Root',  
      dob: "20-04-1993",   
      contact:"+91-33434343",
      email:"sand@example.com", 
      address:"#454 1st Block, Rammurthy, Bangalore-560016",   
      status:"",
      action:"1",      
    },
   
  ]
}
