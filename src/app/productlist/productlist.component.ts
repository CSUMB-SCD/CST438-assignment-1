import { Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

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
