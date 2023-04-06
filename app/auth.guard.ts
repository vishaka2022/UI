import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthServiceService, private router:Router){

  }
  canActivate() {
    if(this.authService.isLoggedIn()){
      console.log(this.authService.isLoggedIn())
      return true;
    }
    this.router.navigate(['/']);
    return false
  }
  
}
