import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav-comp',
  templateUrl: './nav-comp.component.html',
  styleUrls: ['./nav-comp.component.scss']
})
export class NavCompComponent implements OnInit {

  components$: Object;

  constructor() { }

  ngOnInit() {
    this.components$ = [
      'CPU',
      'Chassis',
      'Graphics Card',
      'Mother Board',
      'Power supply',
      'Ram',
    ];
  }

}
