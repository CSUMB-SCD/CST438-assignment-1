import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  product;
  private addToCartSource = new BehaviorSubject<Object>(null);
  addToCartMessage = this.addToCartSource.asObservable();
  private setDetailSource = new BehaviorSubject<Object>(null);
  setDetailMessage = this.setDetailSource.asObservable();

  constructor(private http: HttpClient) { }

  addToCart(product: Object) {
    this.addToCartSource.next(product);
  }
  setDetail(product: Object) {
    this.product = product;
    this.setDetailSource.next(product);
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

  confirmPurchase () {
    return this.http.post('http://localhost:8097/process', 'cart');
  }
}
