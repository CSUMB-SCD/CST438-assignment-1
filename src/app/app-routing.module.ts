import { ItemDetailsComponent } from './item-details/item-details.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes: Routes = [
  {
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
