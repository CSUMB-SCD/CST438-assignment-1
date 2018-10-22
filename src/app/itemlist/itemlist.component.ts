import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.scss']
})

export class ItemlistComponent implements OnInit {
  items$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getItems().subscribe(
      data => this.items$ = data
    );
  }

}
