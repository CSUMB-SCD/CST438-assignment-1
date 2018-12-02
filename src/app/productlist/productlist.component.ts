import { NavCompComponent } from './../nav-comp/nav-comp.component';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})

export class ProductlistComponent implements OnInit {
  products$: Object;
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
}
