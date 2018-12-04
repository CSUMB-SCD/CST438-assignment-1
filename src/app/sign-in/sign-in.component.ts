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

  constructor( private route: Router, private data: DataService, private router: ActivatedRoute) {}

  ngOnInit() {}

  onSubmit() {
    this.data.validate(this.model.userName, this.model.password).subscribe(
     data => this.onValidation(data)
    );
  }

  onValidation(data) {
    if (data.username === null) {
      return;
    }
    this.data.user = data;
    this.route.navigate(['/home']);
  }
}


