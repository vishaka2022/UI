import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from './model/login-data';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  //mockUser is a new insatnce of LoginData so getEmail and getPassword can be used for this too
  private mockUser=new LoginData('vishaka@gmail.com','testing123');
  isAuthenticated=false
  constructor(private router:Router) { }
  authenticate(loginData:LoginData):boolean{
    if(this.checkCredentials(loginData)){
      this.isAuthenticated=true;
      localStorage.setItem('token','abcdefgh')
      this.router.navigate(['/dashboard'])
      return true
    }else{
    this.isAuthenticated=false;
    return false;
  }
  }
  checkCredentials(loginData:LoginData):boolean{
      return this.checkEmail(loginData.getEmail()) &&this.checkPassword(loginData.getPassword())
  }
  //checks if the entered email is same as stored in mockUser
  checkEmail(email:string):boolean{
    return email===this.mockUser.getEmail()
  }
  checkPassword(password:string):boolean{
    return password===this.mockUser.getPassword()
  }

  isLoggedIn(){
    if(this.isAuthenticated){
    console.log(localStorage.getItem('token'))
    return !!localStorage.getItem('token')
    }
  }
}
