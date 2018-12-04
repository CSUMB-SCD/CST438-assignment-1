import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';
import { ProductlistComponent } from './productlist/productlist.component';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiURL = 'https://proj-usersdb.herokuapp.com/User';
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
  user = {'id': 'longid', 'name': 'myname', 'password' : 'mypassword', 'credits' : 300000.99};

  constructor(private http: HttpClient) {}

  addToCart(product: {id: String, name: String, description: String, lo_rez: String, stock: number, price: number,
    catagory: {}, manufacturer: {}, hi_rez: String[], quantity: number}, amount: number) {
      console.log(this.cart);
      console.log(product);
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
    this.detail = product;
  }

  getUsers() {
    return this.http.get(this.apiURL);
  }

  getUser(userName) {
    return this.user;
    // return this.http.get(this.apiURL + userName);
  }

  validate(user: String, pass: String) {
    const payload = { 'username' : user, 'password' : pass};
    return this.http.post<String>('http://localhost:8031/validate', payload);
  }

  getProducts() {
    return this.http.get('https://proj-zuul.herokuapp.com/product-service/Product/');
  }
  confirmPurchase () {
    const payload = { 'user' : this.user, 'products' : this.cart};
    return this.http.post<String>('https://proj-finalize.herokuapp.com/process', payload);
  }

  getItemDetails(itemId) {
    return this.http.get('https://proj-zuul.herokuapp.com/product-service/Product/' + itemId);
  }

  getProduct(productId) {
    return this.http.get('http://127.0.0.1:8081/Product/' + productId);
  }




  public get isSubmitted() {
    return this.submitted;
  }
  public set isSubmitted(value: boolean) {
    this.submitted = value;
  }
}
