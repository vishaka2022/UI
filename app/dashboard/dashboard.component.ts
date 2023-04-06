import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../products.model';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [CartService, ProductService],
})
export class DashboardComponent implements OnInit {
  constructor(
    private router: Router,
    private http: HttpClient,
    private cartService: CartService,
    private prodService: ProductService
  ) {}

  products: Product[] = [];
  postData: Product;

  filteredData = [];

  @HostListener('window:beforeunload') goToPage() {
    this.router.navigate(['/login']);
  }
  ngOnInit() {
    //Get products from JSON server
    // debugger
    this.http
      .get('http://localhost:3000/products')
      .subscribe((res: Product[]) => {
        this.products = res;
        this.filteredData = this.products;
        console.log(res);
      });
  }

  getTotalProducts() {
    // console.log(this.products)
    return this.products.length;
  }
  getTotalMenProducts() {
    return this.products.filter((product) => product.category === 'Men').length;
  }
  getTotalWomenProducts() {
    return this.products.filter((product) => product.category === 'Women')
      .length;
  }

  prodCountRadioButton: string = 'All';
  searchText: string = '';

  onFilterRadioButtonChanged(data: string) {
    this.filteredData = this.products;
    if (data === 'Men') {
      this.filteredData = this.filteredData.filter((product) => {
        return product.category === 'Men';
      });
    } else if (data === 'Women') {
      this.filteredData = this.filteredData.filter((product) => {
        return product.category === 'Women';
      });
    } else {
      return this.filteredData;
    }
    this.prodCountRadioButton = data;
    console.log(this.prodCountRadioButton);
  }

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    console.log(this.searchText);
    //console.log(this.searchText);
    this.filteredData = this.products;

    if (this.searchText) {
      this.filteredData = this.filteredData.filter((product) => {
        return product.name
          .toLowerCase()
          .includes(this.searchText.toLowerCase());
      });
    } else {
      return this.filteredData;
    }
  }
  onCreatePost(postData: Product) {
    this.prodService.postProduct(postData).subscribe((responseData) => {
      console.log('response post', responseData);
      this.cartService.onGetCart().subscribe((res) => {
        // console.log('oncreatepost',res)
        console.log(res.length);
        this.cartService.setCartLength(res.length);
      });
    });
  }
}
