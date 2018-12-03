import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})

export class ProductlistComponent implements OnInit {

  products$;

  constructor(private data: DataService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.data.getProducts().subscribe(
      data => this.products$ = data
    );
  }

  addToCart(product) {
    this.data.addToCart(product, 1);
  }

  details(product) {
    this.data.setDetail(product);
    this.router.navigate(['/details']);
  }
}
// this.data.confirmPurchase().subscribe(val => console.log(val));
