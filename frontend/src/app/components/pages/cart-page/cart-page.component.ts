import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Cart } from 'src/app/shared/models/Carts';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})

export class CartPageComponent implements OnInit {
    cart!: Cart;
    constructor(private cartService: CartService) { 
      this.cartService.getCartObservable().subscribe((cart) => {
        this.cart = cart;
      })
    }
 
    ngOnInit(): void {
    }

    removeFromCart(cartItem:CartItem) {
      this.cartService.removeFromCart(cartItem.gem.id);
    }
  
    changeQuantity(cartItem:CartItem, quantityInString:string){
      const quantity = parseInt(quantityInString);
      //The parseInt() function is a built-in JavaScript function that takes a string as its argument and attempts to parse it as an integer.
      this.cartService.changeQuantity(cartItem.gem.id,quantity);
    }
  }
