import { HttpClient } from '@angular/common/http';
import { Injectable, OnChanges, OnInit } from '@angular/core';
import { BehaviorSubject, map, Subject } from 'rxjs';
import { Product } from '../products.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  // badge:number

  cartLength: number;

  cart: Product[] = [];
  // count = 0;

  constructor(private http: HttpClient) {
    // }total = new BehaviorSubject<number>(0);
  }

  setCartLength(length: number) {
    // debugger;
    this.cartLength = length;

    // return(this.cartLength)
    console.log('setcartlength', this.cartLength);
    // this.getCartLength()
  }

  getCartLength() {
    // console.log("in service page cartLength",this.cartLength)
    // debugger
    this.cartLength = this.cart.length;
    // debugger
    return this.cartLength;
  }
  onGetCart() {
    // this.len=this.getCartLength()
    return this.http.get<Product[]>('http://localhost:3000/cart').pipe(
      map((res: Product[]) => {
        this.cart = res;
        // this.cartLength=this.cart.length
        console.log(this.cart);
        //  console.log("in service page ongetcart",res.length)

        // this.cartLength=res.length

        // console.log("in service page ongetcart",this.cartLength)
        return res;
      })
    );
  }

  deletePosts(id: number) {
    return this.http.delete(`http://localhost:3000/cart/${id}`);

    //  {
    // observe: 'events',
    // responseType: 'text'
    // })
    // .pipe(
    //   tap(event => {
    //     console.log(event);
    //     if (event.type === HttpEventType.Sent) {
    //       // ...
    //     }
    //     if (event.type === HttpEventType.Response) {
    //       console.log(event.body);
    //     }
    //   })
    // );
  }
}
