import { Component, OnInit } from '@angular/core';
import {  Input } from '@angular/core'

import { ActivatedRoute, Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

 import { FormBuilder, FormGroup, Validators,ValidationErrors, ValidatorFn} from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../service/api.service';
import { CommonService } from '../../service/common.service';


@Component({
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component {
  [x: string]: any;
  subtitle: string;
  userCounts: any;

  constructor(private router: Router, private _apiService:ApiService, private _commService: CommonService, private fb:FormBuilder) { }
  
  ngOnInit(): void {
    this.getDashboard(2)
   
  }
  // This is for the dashboar line chart
  // lineChart
  public lineChartData: Array<any> = [
    { data: [50, 130, 80, 70, 180, 105, 250], label: 'Sales' },
    // { data: [80, 100, 60, 200, 150, 100, 150], label: 'Earnings' }
  ];

  public lineChartLabels: Array<any> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
  ];
  public lineChartOptions: any = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          },
          gridLines: {
            color: 'rgba(120, 130, 140, 0.13)'
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            color: 'rgba(120, 130, 140, 0.13)'
          }
        }
      ]
    },
    lineTension: 10,
    responsive: true,
    maintainAspectRatio: false
  };
  public lineChartColors: Array<any> = [
    {
      // grey
      backgroundColor: 'rgba(25,118,210,0.0)',
      borderColor: 'rgba(25,118,210,1)',
      pointBackgroundColor: 'rgba(25,118,210,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(25,118,210,0.5)'
    },
    {
      // dark grey
      backgroundColor: 'rgba(38,218,210,0.0)',
      borderColor: 'rgba(38,218,210,1)',
      pointBackgroundColor: 'rgba(38,218,210,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(38,218,210,0.5)'
    }
  ];
  public lineChartLegend = false;
  public lineChartType = 'line';

  // Doughnut
  public doughnutChartLabels: string[] = ['Sales', 'Earning', 'Cost'];

  public doughnutChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  };
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType = 'doughnut';

  // Sales Analytics Pie chart
  public pieChartLabels: string[] = ['Sales', 'Earning', 'Cost'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType = 'pie';

  // bar chart
  public barChartData: Array<any> = [
    { data: [1.1, 1.4, 1.1, 0.9, 2.1, 1, 0.3], label: 'Cost' }
  ];
  public barChartLabels: Array<any> = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7'
  ];
  public barChartOptions: any = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    },
    
    scales: {
      
      xAxes: [{
        display: false,
        
      }],
      yAxes: [{
        display: false
      }]
    }
  };
  public barChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      hoverBackgroundColor: 'rgba(255, 255, 255, 0.3)',
      hoverBorderWidth: 2,
      hoverBorderColor: 'rgba(255, 255, 255, 0.3)'
    }
  ];
  public barChartLegend = false;
  public barChartType = 'bar';
  getDashboard(id)
  {
    const reqbody = { userData: id};
    console.log(reqbody);
    this._apiService.postRequest("api/v1/admin/dashboard", reqbody).subscribe(
      (response) => {
 
       

        this.userCounts = response["data"]["userCounts"];
        this.userCountsNumber= response["data"]["countUsers"];
        console.log("yyyyyyyy", this.userCounts)
        console.log("zzzzzzzz", this.userCountsNumber)
        this.newUserType=[]
        this.userlength=[]
        if(this.userCounts && this.userCounts.length>0){
          this.userCounts.forEach((res) => {
            this.userlength.push(res.count);
            if (id == 2) {
              this.newUserType.push(res.month + "/" + res.year);
            }
            if (id==3) {
              console.log("newUserCount1")
              this.newUserType.push(res.year);
            }
          });

        }
        console.log("uuuuuuuuuuuuuuu",this.userlength)
        console.log("oooooooooooooooo",this.newUserType)
        this.lineChartData[0].data=this.userlength;
        this.lineChartLabels=this.newUserType
      

       


 
       
      },
      (err: any) => {
        this._commService.errorMsg(err.error.message);
      }
    );

  }
}
