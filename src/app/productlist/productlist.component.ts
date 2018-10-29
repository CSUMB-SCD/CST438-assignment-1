import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})

export class ProductlistComponent implements OnInit {
  products$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getItems().subscribe(
      data => this.products$ = this.test(data)
    );
  }
  test(data) {
    return data;
  }

}
