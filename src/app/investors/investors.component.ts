import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Investor } from './investors';

@Component({
  selector: 'app-investors',
  templateUrl: './investors.component.html',
  styleUrls: ['./investors.component.css']
})
export class InvestorsComponent implements OnInit {
   investorDetail: Investor|undefined;
  name: string;
  year:string;
   myForm:FormGroup;
  //  @Input() investor:Investor;
   showInvestor:string;
 
  // investor1:Investor|undefined;
   investorList: Investor [];
  investorSelected:Investor|undefined;
  searchText:any;
  errorMessage: string;
  investor:Investor|undefined;
 constructor( private route:ActivatedRoute,
  private router:Router,private fb:FormBuilder
  ) {
    
   }
  

  

  ngOnInit() {
    
    
  }
  

  getQDetails(){
    for(let investor of this.INVESTORS){
      if(investor.name == this.name && investor.year == this.year){
          this.investorDetail = investor;
          this.errorMessage = "";
      }
      else{
        this.errorMessage = "Only the above mentionned quater details are available";
        console.log(this.errorMessage);
      }
    }
  }

  INVESTORS: Investor[] = [
  {
    name:"Q1",
    year:"2020",
    sales: 4555,
    otherincomes:8884,
    grossprofit:8520,
    depreciation:630,
    interst:98420,
    tax:6510,
    nextprofit:9510
    },
    {
        name:"Q2",
        year:"2019",
        sales: 4555,
        otherincomes:8884,
        grossprofit:8520,
        depreciation:630,
        interst:98420,
        tax:6510,
        nextprofit:9510
        },

        {
            name:"Q3",
            year:"2018",
            sales: 4555,
            otherincomes:8884,
            grossprofit:8520,
            depreciation:630,
            interst:98420,
            tax:6510,
            nextprofit:9510
            },
            {
                name:"Q4",
                year:"2017",
                sales: 4555,
                otherincomes:8884,
                grossprofit:8520,
                depreciation:630,
                interst:98420,
                tax:6510,
                nextprofit:9510
                },
                {
                    name:"Q5",
                    year:"2016",
                    sales: 4555,
                    otherincomes:8884,
                    grossprofit:8520,
                    depreciation:630,
                    interst:98420,
                    tax:6510,
                    nextprofit:9510
                    },
                    {
                        name:"Q6",
                        year:"2015",
                        sales: 4555,
                        otherincomes:8884,
                        grossprofit:8520,
                        depreciation:630,
                        interst:98420,
                        tax:6510,
                        nextprofit:9510
                        },
                        {
                            name:"Q7",
                            year:"2014",
                            sales: 4555,
                            otherincomes:8884,
                            grossprofit:8520,
                            depreciation:630,
                            interst:98420,
                            tax:6510,
                            nextprofit:9510
                            },



]

}
