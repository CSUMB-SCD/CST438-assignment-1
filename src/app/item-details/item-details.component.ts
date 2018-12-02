import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent  {

  myHeros = 'mark mavic';
  name = 'a string';
  items$: Object = {name: 'james', stock: '3', price: '33.0', namufacturer: 'Asus', description: 'its an item you know' };
  currentUrl: string;

//   constructor(private route: ActivatedRoute, private data: DataService, private router: Router) {
//     this.route.params.subscribe(
//        params => this.items$ = params.id
//     );
//     router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
//  }

  // ngOnInit() {
  //   this.data.getItemDetails(this.items$).subscribe(
  //     data => this.items$ = this.filter(data)
  //   );
  // }

  filter(data) {

    return data;
  }

}
