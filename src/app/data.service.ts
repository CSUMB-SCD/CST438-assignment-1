import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';
import { ProductlistComponent } from './productlist/productlist.component';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private user_service = 'https://proj-zuul.herokuapp.com/user-service/';
  private product_service = 'https://proj-zuul.herokuapp.com/product-service/';
  private finalize = 'https://proj-zuul.herokuapp.com/finalize/';

  detail;
  public submitted: boolean;
  cart: {id: String,
    name: String,
    description: String,
    lo_rez: String,
    stock: number,
    price: number,
    catagory: {};
    manufacturer: {},
    hi_rez: String[],
    quantity: number} [] = [];
  user: {id: String, username: String, credit: number};

  constructor(private http: HttpClient) {}

  addToCart(product: {id: String, name: String, description: String, lo_rez: String, stock: number, price: number,
    catagory: {}, manufacturer: {}, hi_rez: String[], quantity: number}, amount: number) {
    const index = this.cart.findIndex(p => p.id === product.id);
    if (index === -1) {
      product.quantity = 1;
      this.cart.push(product);
    } else {
      this.cart[index].quantity = this.cart[index].quantity + amount;
    }
  }

  deleteCart() {
    this.cart = [];
  }

  setDetail(product: {id: String, name: String, description: String, lo_rez: String, stock: number,
      price: number, catagory: {name: String}, manufacturer: {name: String}, hi_rez: String[]}) {
        console.log(product);

    this.detail = product;
  }

  validate(user: String, pass: String) {
    const payload = { 'username' : user, 'password' : pass};
    return this.http.post(this.user_service + 'validate', payload);
  }

  getProducts() {
    return this.http.get(this.product_service + 'Product');
  }

  confirmPurchase () {
    console.log(this.cart);

    const payload = { 'user' : this.user, 'products' : this.cart};
    return this.http.post(this.finalize + 'process', payload);
  }
}
