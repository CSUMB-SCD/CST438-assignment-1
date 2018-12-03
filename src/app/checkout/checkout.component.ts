import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  products$; Object
  numProducts; int

  currentUrl: string;

  constructor(private data: DataService, private router: Router) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
  }

  ngOnInit() {
    this.data.addToCartMessage.subscribe(message => this.products$ = message);
    this.numProducts = 0;
  }

  getTotal() {
    var total = 0.0;
    for(let item in this.products$) {
     
    }
    return total;
  }

  calculate() {
    var num1= ((document.getElementById("num1") as HTMLInputElement).value);
  }
}
