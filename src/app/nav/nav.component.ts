import { SignInComponent } from './../sign-in/sign-in.component';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {

  constructor(private router: Router, private data: DataService) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
    this.submitted = this.data.isSubmitted;
  }

  currentUrl: string;
  submitted: boolean;
  signinComponent: typeof SignInComponent;

  ngOnInit() {
    if (this.submitted === true) {
      this.submitted = true;
    }
  }

}
