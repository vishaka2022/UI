import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { BuiltinTypeName } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';
import { Button } from 'bootstrap';
import { AuthServiceService } from '../auth-service.service';
import { Product } from '../products.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[CartService]
})
export class HomeComponent implements OnInit {
  
  constructor(private authService:AuthServiceService,@Inject(DOCUMENT)private document:Document,private http:HttpClient,private cartService:CartService){
   
  }
  // btnstate:boolean=this.authService.isAuthenticated;
  cart=[]
  length:number
  
  ngOnInit(){
  //   this.onGetCart().subscribe((res: Product[]) => {
  //     this.cartLength=res.length
  //     // this.cartList = res
  //     // console.log(this.cartList.length)
  // })
  // this.onGetCart()
  // debugger
    this.cartService.onGetCart().subscribe()
    // this.setcartlength()
    
    
  // length=this.cartService.cartLength
  // this.cartService.onGetCart().subscribe((data)=>{
  //   this.cart=data
  // })
  // // console.log('ngoninit')
  //  length=this.cartService.getCartLength()
  // console.log("Length is ",length)

  }



  getUrl(){

   
    let url=this.document.location.href
    // let urlStatus=false
    if(url=='http://localhost:4200/'){
      // console.log("true")
      return true
      // urlStatus=true
    }
    return false
    // urlStatus=false
  }
  // onGetCart(){
  //   return this.http
  //   .get('http://localhost:3000/cart')
  //   .subscribe((res: Product[]) => {
  //     this.cart=res
  //     console.log("cart length",this.cart.length)
  //     // this.cartList = res
  //     // console.log(this.cartList.length)
  // })
  // }
  onGetLength(){
    // console.log("cartlength",this.cartService.getCartLength())
    // console.log(this.cartService.)
    // console.log(this.cartService.cartLength)
    // return this.cartService.cartLength
    return this.cartService.getCartLength()
  }
  // setcartlength(){
  //   this.length=this.cartService.cartLength
  //   console.log("this.length)
  // }
}
