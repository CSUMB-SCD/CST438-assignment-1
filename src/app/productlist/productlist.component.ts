import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})

export class ProductlistComponent implements OnInit {

  products$: {id: String,
    name: String,
    description: String,
    lo_rez: String,
    stock: number,
    price: number,
    catagory: {};
    manufacturer: {}}[];
  component$: String;

  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.component$ = params.component
    );
   }

  ngOnInit() {
    this.data.getProducts().subscribe(
      data => this.products$ = this.filter(data)
    );
  }

  filter(data) {
    return data;
  }

  addToCart(id: String) {
    for (const product of this.products$) {
      if (product['id'] === id) {
        this.data.changeMessage(product);
      }
    }
  }
}
