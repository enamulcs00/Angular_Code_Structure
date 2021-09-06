import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-project-counter',
  templateUrl: './project-counter.component.html'
})
export class ProjectCounterComponent implements OnInit {
  @Input('item') public items
  a: any;
  b: any;
  add: any;
  edit: any;
  delete: any;
  isView: any;
  view: any;
  constructor() {}
  ngOnInit(){
    this.a=JSON.parse(localStorage.getItem('user')).role
   
    this.b=JSON.parse(localStorage.getItem('permissionItems'))
    console.log(this.a,this.b,"nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
    if(this.a==2){
      this.b.forEach(element=>{
        if(element.label=="Users"){
          this.view=element.isView,
          this.add=element.isAdd,
          this.edit=element.isEdit,
          this.delete=element.isDelete
        }
  
      })
      console.log(this.add);
      console.log(this.edit);
      console.log(this.delete);
    }
    
  }
}
