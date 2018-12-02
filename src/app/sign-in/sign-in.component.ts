import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  User: Object;
  currentUrl: string;
  model: any = {};

  // constructor(private router: Router) {
  //   router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
  // }

  // ngOnInit() {


  // }

  submitted = false;

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }

}


