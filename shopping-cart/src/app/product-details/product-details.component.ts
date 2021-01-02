import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
    // Coletar id do produto da rota.
    const productIdFromRoute = this.route.snapshot.paramMap.get('productId');
    // Encontrar o produto correspondente ao id da rota.
    this.product = products.find(product => {
      return product.id === Number(productIdFromRoute);
    });
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Seu produto foi adicionado ao carrinho!');
  }

}
