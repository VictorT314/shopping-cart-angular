import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { 
    this.checkoutForm = this.formBuilder.group({
      nome: '',
      endereco: ''
    });
  }

  ngOnInit(){
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {
    // Processamento dos dados de checkout
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn('Seu pedido foi realizado', customerData);
  }

}
