import { Component, Input, NgModule, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { getLocaleDayNames } from '@angular/common';





@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.css']
})
export class LoginSuccessComponent implements OnInit {

 cityname:any
 date:any
 humidity:any
 username:any
 password:any
 temp:any
 icon:any

 conditions:any
 precipitation:any
 prev1:any
 prev2:any
 prev3:any
 prev4:any
 d1:any
 d2:any
 d3:any
 d4:any
 windspeed:any

constructor(private http:HttpClient) { }

ngOnInit(): void {
    
   this.http.get("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/dharmapuri?unitGroup=metric&key=LZ93HMJUX9ZYWEEVL3QBCKF8V&contentType=json").subscribe((response: any)=>
   {
       console.log(response)
       this.cityname=response.address;
       this.windspeed=response.days[0].windspeed;
       this.date=response.days[0].datetime;
       this.humidity=response.days[0].humidity;
       this.temp=response.days[0].temp;
       this.conditions=response.days[0].conditions;
       this.precipitation=response.days[0].precip;
       this.prev1=response.days[1].temp;
       this.prev2=response.days[2].temp;
       this.icon=response.days[0].icon
       this.prev3=response.days[3].temp;
       this.prev4=response.days[4].temp;
       this.d1=response.days[1].datetime;
       this.d2=response.days[2].datetime;
       this.d3=response.days[3].datetime;
       this.d4=response.days[4].datetime;
       

    });

    this.http.get("http://localhost:4200/login").subscribe((response: any)=>
    {
        console.log(response)});  
}}


