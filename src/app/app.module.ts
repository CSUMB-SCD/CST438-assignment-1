import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { NavCompComponent } from './nav-comp/nav-comp.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { ItemsComponent } from './items/items.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    UsersComponent,
    NavComponent,
    ProductlistComponent,
    NavCompComponent,
    CheckoutComponent,
    ThankYouComponent,
    ItemsComponent,
    ItemDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
