import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Product } from '../products.model';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers:[CartService]
})

export class CartComponent implements OnInit{
  
  cartList:Product[]=[]
  cartlength:number
  incCart=false;
  decCart=false;
  constructor(private router:Router, private http: HttpClient,private cartService: CartService){
    // this.cartService.onGetCart().subscribe((res: Product[]) => {
    //   this.cartList = res
    //   console.log('Cart component',this.cartList.length)
  // })
  }

  ngOnInit(){
    //Get products from JSON server
    
    this.http
      .get('http://localhost:3000/cart')
      this.cartService.onGetCart().subscribe((res: Product[]) => {
        this.cartList = res
        this.cartlength=this.cartList.length
        // this.cartlength=this.cartService.getCartLength()
        // console.log('Cart component',this.cartlength)
    })
    
     
    }
   

    // onGetCart(){
    //   return this.http
    //   .get('http://localhost:3000/cart')
    // }
    onClearPosts(cart:any) {
      
      // Send Http request
      
      this.cartService.deletePosts(cart.id).subscribe(()=>{
        this.cartList=this.cartList.filter(
          //filters through cartList and removes product and retaines the product whose id does not match with the cart.id
          p=>p.id!=cart.id
          
        )
        
      });
      
    }
    // deletePosts(id:number) {
    //   return this.http
    //     .delete(`http://localhost:3000/cart/${id}`)
        
        
    //     //  {
    //       // observe: 'events',
    //       // responseType: 'text'
    //     // })
    //     // .pipe(
    //     //   tap(event => {
    //     //     console.log(event);
    //     //     if (event.type === HttpEventType.Sent) {
    //     //       // ...
    //     //     }
    //     //     if (event.type === HttpEventType.Response) {
    //     //       console.log(event.body);
    //     //     }
    //     //   })
    //     // );
    // }
    inc(cart){
      
      cart.qnt=cart.qnt+1
     
      let body={
        id:cart.id,
        name:cart.name,
        category:cart.category,
        price:cart.price,
        image:cart.image,
        qnt:cart.qnt
      }
      this.http.put(`http://localhost:3000/cart/${cart.id}`,body)
      .subscribe((data)=>{
        console.log(data)
      })
   
    }
    dec(cart){
      cart.qnt=cart.qnt-1
      let body={
        id:cart.id,
        name:cart.name,
        category:cart.category,
        price:cart.price,
        image:cart.image,
        qnt:cart.qnt
      }
      this.http.put(`http://localhost:3000/cart/${cart.id}`,body)
      .subscribe((data)=>{
        console.log(data)
      })
    }

    getTotalPrice(){
      let total=0
      this.cartList.forEach((cart)=>{
        total+=cart.price
      })
      return total
    }
    
   
    

}
