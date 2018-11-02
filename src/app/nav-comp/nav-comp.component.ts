import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav-comp',
  templateUrl: './nav-comp.component.html',
  styleUrls: ['./nav-comp.component.scss']
})
export class NavCompComponent implements OnInit {

  currentUrl: string;
  components$: Object;

  constructor(private router: Router) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
  }

  ngOnInit() {
    this.components$ = [
      'Chassis',
      'Mother Board',
      'Processor',
      'Graphics Card',
      'Ram',
      'Power supply',
    ];
  }

}
