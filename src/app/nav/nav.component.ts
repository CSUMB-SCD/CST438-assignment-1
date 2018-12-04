import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {

  currentUrl: string;

  constructor(private router: Router, private data: DataService) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
  }

  ngOnInit() {}

}
