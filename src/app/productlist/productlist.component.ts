import { Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss'],
  // Add this:
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
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
    console.log(this.products$);
    this.data.setDetail(product);
    this.router.navigate(['/details']);
  }
}
