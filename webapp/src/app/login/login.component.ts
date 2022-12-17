import { HtmlParser } from '@angular/compiler';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import{Router, Routes} from '@angular/router'
import { Route } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';






@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})




export class LoginComponent implements OnInit {
  static email: any;
  [x: string]: any;
 
  username="";
  password="";

  constructor(private router:Router,private http:HttpClient){

    }
  
  

  ngOnInit(): void
  {
    
    
  }
  navigate()
  {
    if(this.username!='' && this.password!='')
    {
      this.router.navigate(["/success"]);
      
    }
    else{
      window.alert("Please fill in the required details")
    }
  }

  navigate1() 
  {
    this.router.navigate(["/signup"]);
  }
  
 
   
  
  
  

}



