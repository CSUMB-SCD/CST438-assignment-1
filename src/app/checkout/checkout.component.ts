import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  firstName: String;
  lastName: String;
  reasons$: String[];
  phone: number;

  currentUrl: string;

  constructor(public data: DataService, private router: Router) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
  }

  ngOnInit() {}

  confirmPurchase() {
    this.data.confirmPurchase().subscribe(val => this.confirmPurchaseResult(val));
  }

  confirmPurchaseResult(val) {
    this.reasons$ = val;
    if (val.length === 0) {
      this.router.navigate(['/confirm']);
    }
  }

  passNames(firstName: String, lastName: String) {

  }
}
