import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginPageComponent },
  // {path:'dashboard', component:DashboardComponent},
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'details/:productId', component: ProductDetailsComponent },
  // {path: 'item/:id', component: SomeItemComponent}

  // {path:'dashboard', component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
