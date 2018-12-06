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

  myHeros = 'mark mavic';
  name = 'a string';
  item$: String;

  product$;

  constructor(private data: DataService) {}

  addToCart(product) {
    this.data.addToCart(product, 1);
    // for (const product of this.products$) {
    //   if (product['id'] === id) {
    //     this.data.addToCart(product);
    //   }
    // }
  }
  ngOnInit() {
    this.product$ = this.data.detail;
  }

}
