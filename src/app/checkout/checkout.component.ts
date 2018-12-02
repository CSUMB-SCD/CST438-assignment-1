import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  currentUrl: string;
  cart: {}[] = [];

  constructor(private data: DataService, private router: Router) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
  }

  ngOnInit() {
    this.data.addToCartMessage.subscribe(message => this.Cart(message));
  }

  Cart(product: Object) {
    this.cart.push(product);
    console.log(this.cart);
    this.data.confirmPurchase();
  }
}
