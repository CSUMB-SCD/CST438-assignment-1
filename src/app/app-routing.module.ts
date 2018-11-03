import { SignInComponent } from './sign-in/sign-in.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { NavCompComponent } from './nav-comp/nav-comp.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ThankYouComponent } from './thank-you/thank-you.component';


const routes: Routes = [
  {
    path: 'home',
    component: UsersComponent
  },
  {
    path: 'details/:id',
    component: ItemDetailsComponent
  },
  {
    path: 'products',
    component: ProductlistComponent
  },
  {
    path: 'products/:component',
    component: ProductlistComponent
  },
  {
    path: 'cart',
    component: CheckoutComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'thankyou',
    component: ThankYouComponent
  },
  {
    path: 'signin',
    component: SignInComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
