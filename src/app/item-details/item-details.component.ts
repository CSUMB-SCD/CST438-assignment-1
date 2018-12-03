import { Observable } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  product$;
  amount: number;
  index = 0;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.product$ = this.data.detail;
  }

  addToCart() {
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
