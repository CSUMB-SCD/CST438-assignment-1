
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


  constructor( private route: Router, private data: DataService, private router: ActivatedRoute) {
    this.router.params.subscribe( () => this.users$);
   }

   ngOnInit() {

    // this.data.getUser().subscribe(
    //   data => this.userName$ = this.filter(data)
    // );

    this.data.getUsers().subscribe(

      // GETTING ALL THE USERS IN AN OBJECT LIST.
      data => this.users$ = this.filter(data)
    );

  }

  getSubmitted(): boolean {
    return this.submitted;
  }

  filter(data) {
    return data;
  }


  onSubmit() {
    this.data.validate(this.model.userName, this.model.password).subscribe(
     data => this.onValidation(data)
    );
  }

  onValidation(data) {
    console.log(data);

    if (data.username === null) {
      this.failmessage = 'Login Invalid How Could You Fail This We Have The Logins Below';
      return;
    }
    this.data.user = data;
    this.route.navigate(['/home']);
  }

//   public onLoginClick() {
//     this.route.navigate(['./home']);
// }

}


