
import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})


export class SignInComponent implements OnInit {

  model: any = {};
  submitted: boolean;
  myUserName: string;
  myPassword: string;

  // All users in DB.
  users$: any;


  constructor( private route: Router, private data: DataService, private router: ActivatedRoute) {}

  ngOnInit() {}

  getSubmitted(): boolean {
    return this.submitted;
  }

  onSubmit() {

    this.submitted = true;
    this.data.isSubmitted = true;
    this.myUserName = this.model.userName;
    this.myPassword = this.model.password;

    this.data.validate(this.model.userName, this.model.password).subscribe(
      data => this.onValidation(data)
    );
  }

  onValidation(data) {
    console.log(data);

    this.route.navigate(['/home']);
  }
}


