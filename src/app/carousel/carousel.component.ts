import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images$: String[];
  image$: String;
  index = 0;

  constructor(private data: DataService, config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 30;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit() {
    this.images$ = this.data.detail.hi_rez;
    this.image$ = this.data.detail.hi_rez[this.index];
  }

  changeImage(i: number) {
    if ((i === -1 && this.index + i !== -1)
      || (i === 1 && this.index + i !== this.images$.length)) {
        this.image$ = this.images$[this.index += i];
    }
  }
  setImage(i: number) {
    this.index = i;
    this.image$ = this.images$[this.index];
  }
}
