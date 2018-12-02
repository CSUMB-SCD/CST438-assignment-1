import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  detail;
  cart = [];
  amounts = [];
  user = {'id': 'longid', 'name': 'myname', 'password' : 'mypassword', 'credits' : 300000.99};

  private addToCartSource = new BehaviorSubject<Object>(null);
  addToCartMessage = this.addToCartSource.asObservable();
  private setDetailSource = new BehaviorSubject<Object>(null);
  setDetailMessage = this.setDetailSource.asObservable();

  constructor(private http: HttpClient) { }

  addToCart(product: Object, amount: number) {
    const index = this.cart.findIndex(p => p.id === product.id);
    if (index === -1) {
      this.cart.push(product);
      this.amounts.push(amount);
    } else {
      this.amounts[index] += amount;
    }
  }

  setDetail(product: Object) {
    this.detail = product;
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
    const payload = { 'user' : this.user, 'products' : this.cart, 'amounts' : this.amounts };
    return this.http.post<String>('http://localhost:8097/process', payload);
  }
}
