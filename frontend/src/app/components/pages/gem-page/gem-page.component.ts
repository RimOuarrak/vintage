import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { GemService } from 'src/app/services/gem.service';
import { Gem } from 'src/app/shared/models/Gem';

@Component({
  selector: 'app-gem-page',
  templateUrl: './gem-page.component.html',
  styleUrls: ['./gem-page.component.css']
})
export class GemPageComponent implements OnInit{
  gem!: Gem;
  constructor(activatedRoute:ActivatedRoute, gemService:GemService, private cartService:CartService, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
        this.gem = gemService.getGemById(params.id);
    })
  }

  ngOnInit(): void {
    
  }

  addToCart() {
    this.cartService.addToCart(this.gem);
    this.router.navigateByUrl('/cart-page');
  }
}

