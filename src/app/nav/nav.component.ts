import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DataService } from '../data.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {

  currentUrl: string;

  message: string;

  constructor(private data: DataService, private router: Router) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
  }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.logtest(message));
  }

  logtest(text: Object) {

    console.log('yayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');
    console.log(text);

    return text;
  }
}
