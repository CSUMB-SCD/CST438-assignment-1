import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';
import { ProductlistComponent } from './productlist/productlist.component';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  detail;
  cart: {id: String,
    name: String,
    description: String,
    lo_rez: String,
    stock: number,
    price: number,
    catagory: {};
    manufacturer: {},
    hi_rez: String[]} [] = [];
  amounts = [];
  user = {'id': 'longid', 'name': 'myname', 'password' : 'mypassword', 'credits' : 300000.99};

  constructor(private http: HttpClient) {}

  addToCart(product: {id: String, name: String, description: String, lo_rez: String, stock: number, price: number,
    catagory: {}, manufacturer: {}, hi_rez: String[]}, amount: number) {
    const index = this.cart.findIndex(p => p.id === 'product.id');
    if (index === -1) {
      this.cart.push(product);
      this.amounts.push(amount);
    } else {
      this.amounts[index] += amount;
    }
  }

  deleteCart() {
    this.cart = [];
    this.amounts = [];
  }

  setDetail(product: {id: String, name: String, description: String, lo_rez: String, stock: number,
      price: number, catagory: {name: String}, manufacturer: {name: String}, hi_rez: String[]}) {
    this.detail = product;
  }

  getProducts() {
    return this.http.get('https://proj-zuul.herokuapp.com/product-service/Product/');
  }

  confirmPurchase () {
    const payload = { 'user' : this.user, 'products' : this.cart, 'amounts' : this.amounts };
    return this.http.post<String>('https://proj-finalize.herokuapp.com/process', payload);
  }



  getItemDetails(itemId) {
    return this.http.get('https://proj-zuul.herokuapp.com/product-service/Product/' + itemId);
  }
}
