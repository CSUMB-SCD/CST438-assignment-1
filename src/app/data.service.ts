import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private user_service = 'https://proj-zuul.herokuapp.com/user-service/';
  public submitted: boolean;
  constructor(private http: HttpClient) { }


  validate(user: String, pass: String) {
    const payload = { 'username' : user, 'password' : pass};
    return this.http.post(this.user_service + 'validate', payload);
  }

  // getUserData(user, password): User {
  //   this.http.get<User>('https://cst438userdata.herokuapp.com/getuserdata/' + user + '/' + password)
  //   .subscribe(
  //    data => {
  //      this.user$.username = data.username;
  //      this.user$.id = data.id;
  //      this.user$.balance = data.balance;
  //      this.user$.shoppingCart = data.shoppingCart;
  //      console.log(data);
  //      if (data.username !== ' ') {
  //        this.router.navigate(['/products']);
  //      } else {
  //        this.user$.username = undefined;
  //        alert('Username and password incorrect');
  //      }
  //    });
  //  return this.user$;
  //  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getProducts() {
    return this.http.get('http://127.0.0.1:8081/Product');
  }

  getProduct(productId) {
    return this.http.get('http://127.0.0.1:8081/Product/' + productId);
  }

}
