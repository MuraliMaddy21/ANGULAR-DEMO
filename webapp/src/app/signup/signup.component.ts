
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  username="";
  password="";
  email="";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigate()
  {
    
    if(this.username!='' && this.password!='' && this.email!='')
    {
      this.router.navigate(["/login"]);
      
    }
    else{
      window.alert("Please fill in the required details")
    }
    
      
  }

  }


