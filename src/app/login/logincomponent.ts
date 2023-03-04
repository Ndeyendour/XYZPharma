import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product/product';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage = "Invalid Credentials";
  invalidLogin = false;

  constructor(private route:Router) { }

  ngOnInit(){
  }
  handleLogin(){
    if(this.email === "ndeyefatou023@gail.com" && this.password === "ndour94"){
      this.invalidLogin = false;
      this.route.navigate(['/home']);
    }else{
      this.invalidLogin = true;
    }
  }

}
