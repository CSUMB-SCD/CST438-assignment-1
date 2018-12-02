import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  product$ ;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.product$ = this.data.detail;
    console.log(this.product$);

  }
  addToCart(product) {
    this.data.addToCart(product, 1);
  }

}
