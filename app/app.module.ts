import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeComponent } from './home/home.component';
import { AuthServiceService } from './auth-service.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { HttpClientModule } from  '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PriceFigurePipe } from './cart/priceFigure.pipe';





@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomeComponent,
    DashboardComponent,
    SearchComponent,
    FilterComponent,
    CartComponent,
    ProductDetailsComponent,
    PriceFigurePipe,

    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
