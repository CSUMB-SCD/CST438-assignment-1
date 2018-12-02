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

  product$: Object;
  // products$: {id: String,
  //   name: String,
  //   description: String,
  //   lo_rez: String,
  //   stock: number,
  //   price: number,
  //   catagory: {};
  //   manufacturer: {}}[];
  component$: String;

  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.item$ = params.id
    );
   }

  ngOnInit() {
    this.data.getItemDetails(this.item$).subscribe(
      data => this.product$ = this.filter(data)
    );
  }

  filter(data) {
    return data;
  }

}
