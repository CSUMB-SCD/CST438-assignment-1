import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private addToCartSource = new BehaviorSubject<Object>(null);
  addToCartMessage = this.addToCartSource.asObservable();


  constructor(private http: HttpClient) { }

  changeMessage(product: Array<Object>) {
    this.addToCartSource.next(product);
  }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId);
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getProducts() {
    return this.http.get('https://proj-zuul.herokuapp.com/product-service/Product/');
  }

//  addHero (cart: JSON): Observable<JSON> {
//    return this.http.post<JSON>('https://proj-zuul.herokuapp.com/productdb/', cart, httpOptions)
//      .pipe(
//        catchError(this.handleError('addHero', cart))
//      );
//  }
}
