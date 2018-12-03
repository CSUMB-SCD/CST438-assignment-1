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

  filter(data) {
    return data;
  }

  onSubmit() {

    this.submitted = true;

    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
    // alert(JSON.stringify(this.model.userName));

    // Storing username and password as a String variable.
    this.myUserName = this.model.userName;
    this.myPassword = this.model.password;

    // Alert containing username works.
    //  alert(JSON.stringify(this.users$.username));



    if (this.submitted) {

      // exporting variable to another file.
     for (let i = 0; i < this.users$.length; i++ ) {
        if (this.users$[i].username === this.myUserName && this.users$[i].password === this.myPassword ) {
          alert(JSON.stringify('Hi ' + this.myUserName + ' . Welcome back!'));
          this.route.navigate(['/home']);
          return;
        }
      }
      alert(JSON.stringify('Incorrect username or password. Try again!'));
    }

  }

//   public onLoginClick() {
//     this.route.navigate(['./home']);
// }

}


