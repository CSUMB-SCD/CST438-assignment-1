import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  items$: Object;

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe(
       params => this.items$ = params.id );
 }

  ngOnInit() {
    this.data.getItemDetails(this.items$).subscribe(
      data => this.items$ = this.filter(data)
    );
  }
  filter(data) {

    return data;
  }

}
