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
  myUserName: string;
  myPassword: string;
  users$: any;

  constructor( private route: Router, private data: DataService, private router: ActivatedRoute) {}

  ngOnInit() {}

  onSubmit() {
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


