import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  myHero = 'james';
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  ill  = [ `https://imgur.com/9Vfx26u.jpg`, `https://imgur.com/9Vfx26u.jpg`];

  ima: object = [
    {name: 'https://imgur.com/9Vfx26u.jpg', age: 25},
    {name: 'https://imgur.com/9Vfx26u.jpg', age: 40},
    {name: 'https://imgur.com/9Vfx26u.jpg', age: 85}
  ];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit() {

  }
}
