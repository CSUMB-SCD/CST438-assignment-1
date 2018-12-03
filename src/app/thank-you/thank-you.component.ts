import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {

  userName$: Object;
  products$: Object;
  emptyList$: Array<Object> = [];

  currentUrl: string;

  constructor(private data: DataService, private router: Router) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
  }

  ngOnInit() {
    this.data.addToCartMessage.subscribe(message => this.products$ = message);
    //this.data.changeNameMessage.subscribe(newUser => this.userName$ = newUser);
  }

  clearList() {
    this.data.changeMessage(this.emptyList$);
  }

}
