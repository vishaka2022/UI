import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  

  constructor(private http: HttpClient) { }
  getProduct(){
    return this.http
      .get('http://localhost:3000/products')
  }

  postProduct(postData:Product){
    return this.http
    .post(
      'http://localhost:3000/cart',
      postData
    )
  }

  // filterSearchText(searchText,filteredData){
  //   if(searchText){
  //     filteredData=filteredData.filter(product=>{
        

  //       return product.name.toLowerCase().includes(searchText.toLowerCase())
        
  //     })
  //     console.log('filteredData',filteredData)
  //     // return filteredData
  //   }
  //   else{
  //     return filteredData
  //   }
  //   return filteredData
  //   console.log('filterdata',filteredData)

  // }
}
