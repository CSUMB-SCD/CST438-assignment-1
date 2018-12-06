import { NavComponent } from './../nav/nav.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  navComponent: typeof NavComponent;


  constructor(private route: Router, private data: DataService) {
    this.navComponent = NavComponent;
  }

  ngOnInit() {
    this.data.submitted = false;
    alert(JSON.stringify('Successfully logged out!'));
    this.route.navigate(['/home']);
  }

}
