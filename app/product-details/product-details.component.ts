import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { Product } from '../products.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  prodDetails:undefined|Product
  private routeSub: Subscription;

  constructor(private activeRoute: ActivatedRoute, private http: HttpClient){
    
  }
  ngOnInit(){
    //Get products from JSON server
    let productId= this.activeRoute.snapshot.paramMap.get('productId');
    console.log(productId)
    
    this.getProduct(productId).subscribe((res)=>{
      this.prodDetails=res
      console.log(this.prodDetails)
    })
    // this.http.getProduct(productId).subscribe((result)=>{
    //   this.productData= result;
   
     
    // }
    // getProduct(id: string) {
    //   return this.http.get<Product>(`http://localhost:3000/products/${id}`);
    // }

  }
  getProduct(id:string){
    return this.http.get<Product>(`http://localhost:3000/products/${id}`)
  }

  onCreatePost(postData: Product) {
    // Send Http request
    this.http
      .post(
        'http://localhost:3000/cart',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }
}
