import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../shared/models/CartItem';
import { Cart } from '../shared/models/Carts';
import { Gem } from '../shared/models/Gem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart); 
  //BehaviorSubject<Cart> is to store the current state of the cart and emit updates to any components that are subscribed to the cart
  constructor() { }

  addToCart(gem:Gem):void {
    let cartItem =  this.cart.items.find(item => item.gem.id == gem.id);
    if(cartItem)
    return;
    this.cart.items.push(new CartItem(gem));
    //push function is used to navigate to a new route by pushing a new route onto the navigation stack.
    this.setCartToLocalStorage();
  }

  removeFromCart(gemId:string):void {
    this.cart.items = this.cart.items.filter(item => item.gem.id != gemId);
    this.setCartToLocalStorage();
  }

  changeQuantity(gemId:string, quantity:number) {
    let cartItem =  this.cart.items.find(item => item.gem.id == gemId);
    if(!cartItem)
      return ;
    cartItem.quantity = quantity;
    cartItem.price =  quantity * cartItem.gem.price;
    this.setCartToLocalStorage();
  }

  clearCart() {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable():Observable<Cart> {
    return this.cartSubject.asObservable();
    //Observable holds the current value and emits it to any new subscribers as well as to any existing subscribers when the value changes
  }

  private setCartToLocalStorage():void {
    this.cart.totalPrice = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.price, 0)
    this.cart.totalCount = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0)
    //the reduce function is called as much is our number of items
    const cartJson =  JSON.stringify(this.cart);
    localStorage.setItem('Cart',cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    //localStorage allows you to store key-value pairs of data in the browser. 
    return cartJson? JSON.parse(cartJson): new Cart();
    //allows you to convert a JSON string into a JavaScript object.
    //This is commonly used in combination with JSON.stringify() when working with localStorage in Angular.
  }
}
