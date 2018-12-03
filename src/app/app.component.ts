import { Component, Injectable } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public _isLoggedIn: boolean;
  title = 'proj';

  constructor() {
    this.isLoggedIn = false;
  }


  public get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }
  public set isLoggedIn(value: boolean) {
    this._isLoggedIn = value;
  }

}
