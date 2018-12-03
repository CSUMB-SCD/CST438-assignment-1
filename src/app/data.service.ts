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
<<<<<<< HEAD
    const index = this.cart.findIndex(p => p.id === 'product.id');
=======
    const index = this.cart.findIndex(p => p.id === product.id);
>>>>>>> 5419604ebf50c7355c1f3cf0413ba9abb6d5784c
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

<<<<<<< HEAD
=======
  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId);
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

>>>>>>> 5419604ebf50c7355c1f3cf0413ba9abb6d5784c
  getProducts() {
    return this.http.get('https://proj-zuul.herokuapp.com/product-service/Product/');
  }

  confirmPurchase () {
    const payload = { 'user' : this.user, 'products' : this.cart, 'amounts' : this.amounts };
    return this.http.post<String>('https://proj-finalize.herokuapp.com/process', payload);
  }
}
