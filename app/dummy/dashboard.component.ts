import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

 
  constructor(private router:Router, private http: HttpClient){}
  loadedProducts = [];
  
  // products = [
   
  //     {id:1, name: 'Belt',category:'Men',price: 'Rs.109', image: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/belt.webp'},
  //     {id:2, name: "Men'sTshirt",category:'Men', price: 'Rs.3339',  image: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp'},
  //     {id:3, name: "Women's Shoes",category:'Women', price: 'Rs.1855',  image: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/shoes%20(3).webp'},
  //     {id:4, name: "Men's Shoes",category:'Men', price: 'Rs.1765', image: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(23).webp'},
  //     {id:5, name: "Women's watch",category:'Women', price: 'Rs.2815',  image: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(17).webp'},
  //     {id:6, name: "Hat",category:'Women',price: 'Rs.2145', image: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(30).webp'},
     
  //   ];

    filteredData= []
    @HostListener('window:beforeunload') goToPage() {
      this.router.navigate(['/login']);
    }
    ngOnInit(){
      this.filteredData=this.products
    }
  

    getTotalProducts(){
      return this.products.length;
    }
    getTotalMenProducts(){
      return this.products.filter(product => product.category === 'Men').length;
    }
    getTotalWomenProducts(){
      return this.products.filter(product => product.category === 'Women').length;
    }
  
    prodCountRadioButton: string = 'All';
    searchText: string = '';
  
    onFilterRadioButtonChanged(data: string){
      this.filteredData=this.products
      if(data==='Men'){
        this.filteredData=this.filteredData.filter(product=>{
          return product.category === 'Men'
        })
      }
      else if(data==='Women'){
        this.filteredData=this.filteredData.filter(product=>{
          return product.category === 'Women'
        })
      
      }
      else{
        return this.filteredData
      }
      this.prodCountRadioButton = data;
      console.log(this.prodCountRadioButton);
    }
  

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    console.log(this.searchText)
    //console.log(this.searchText);
    this.filteredData=this.products

    if(this.searchText){
      this.filteredData=this.filteredData.filter(product=>{
        

        return product.name.toLowerCase().includes(this.searchText.toLowerCase())
        
      })
    }
    else{
      return this.filteredData
    }
    
  }
  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http
      .post(
        '',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  private fetchPosts() {
    this.http
      .get('http://localhost:3000/products')
      .pipe(
        map(responseData => {
          const postsArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      )
      .subscribe(posts => {
        // ...
        console.log(posts);
      });
  }

  
  
}