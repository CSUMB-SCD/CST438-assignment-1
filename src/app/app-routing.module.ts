import { ItemDetailsComponent } from './item-details/item-details.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
=======
import { UsersComponent } from './users/users.component';
>>>>>>> 5419604ebf50c7355c1f3cf0413ba9abb6d5784c
import { CheckoutComponent } from './checkout/checkout.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes: Routes = [
  {
<<<<<<< HEAD
=======
    path: '',
    component: UsersComponent
  },
  {
>>>>>>> 5419604ebf50c7355c1f3cf0413ba9abb6d5784c
    path: 'details',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
