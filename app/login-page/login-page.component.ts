import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { LoginData } from '../model/login-data';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  @ViewChild('f') loginForm: NgForm
  user={
    
    email:'',
    password:''


  }
  // submitted=false

  //inject AuthServiceService
  constructor(private authService:AuthServiceService, private router:Router){

  }
  onSubmit(){
   console.log(this.loginForm.value)
  //  this.submitted=true
   this.user.password=this.loginForm.value.password
   //create an instance of LoginData that we created in model folder and pass in the email and passward that we got from ngForm
   const loginData=new LoginData(this.loginForm.value.email, this.loginForm.value.password)
   
  this.authService.authenticate(loginData);
  //  if(this.authService.authenticate(loginData)){
  //   this.router.navigate(['/dashboard'])
  //  }
   
  }
}


