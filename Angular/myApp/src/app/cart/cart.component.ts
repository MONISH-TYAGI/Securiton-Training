import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
constructor(private cartService:CartService)
{
}
ngOnInit(): void {}
getCart()
{
  return this.cartService.get();  
}
}
