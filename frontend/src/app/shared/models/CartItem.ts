import { Gem } from "./Gem";

export class CartItem {
    constructor(public gem:Gem) { } 
    quantity:number = 1;
    price: number = this.gem.price;
}