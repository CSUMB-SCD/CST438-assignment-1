import { ActivatedRoute } from '@angular/router';
import { DataService } from './../data.service';
import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent {

  images$ = [1, 2, 3].map(() => `https://imgur.com/9Vfx26u.jpg`);
  img$: object = [
    {name: 'John', age: 25},
    {name: 'Mary', age: 40},
    {name: 'Peter', age: 85}
  ];

  // ngOnInit() {
  //   this.data.getProducts().subscribe(
  //     data => this.products$ = this.data
  //   );
  // }

  warnUser(message$): void {
    console.log(message$);
  }

}
