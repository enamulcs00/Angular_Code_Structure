import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
orderslist = [
  {
  serial_no:'1',
  firstname: 'Sandy', 
  lastname: 'Doe',  
  id: "sand55",    
  contact:"+91-33434343",
  order:"Small Bin",
  address:"#454 1st Block, Rammurthy, Bangalore-560016",
  orderdate:"12-06-2021",
  deliverydate:"14-06-2021",
  status:"",      
},
{
  serial_no:'2',
  firstname: 'Sandy', 
  lastname: 'Doe',  
  id: "sand55",    
  contact:"+91-33434343",
  order:"Small Bin",
  address:"#454 1st Block, Rammurthy, Bangalore-560016",
  orderdate:"18-06-2021",
  deliverydate:"20-06-2021",
  status:"",      
}
]

}
