import { Observable } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  product$;
  amount: number;
  index = 0;

  constructor(config: NgbCarouselConfig, private data: DataService) {
    // customize default values of carousels used by this component tree
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit() {
    this.product$ = this.data.detail;
    console.log(this.data.detail);

  }

  addToCart() {
    if (!(this.amount > 0)) {
      this.amount = 1;
    }
    this.data.addToCart(this.product$, this.amount);
  }

  changeImage(i: number) {
    if ((i === -1 && this.index + i !== -1)
      || (i === 1 && this.index + i !== this.product$.hi_rez.length)) {
        this.index += i;
    }
  }
  setImage(i: number) {
    this.index = i;
  }
}
