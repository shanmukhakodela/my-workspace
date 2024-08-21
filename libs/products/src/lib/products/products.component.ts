import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card'
import { Store } from '@ngrx/store';
import { loadProductsSuccess } from './+state/products/products.actions';
import { selectAllProducts } from './+state/products/products.selectors';


@Component({
  selector: 'lib-products',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  newProducts: any;
  products = [{
    "name":"Angular",
    "id":1,
    "author":"abc",
    "description": "Angular is an open source library",
    "added": false,
    "image": "./assets/best-angular-app-examples.png",
    "price": 399
},
{
    "name": "React",
    "id":2,
    "author":"xyz",
    "description": "React is an advanced web technology",
    "added": false,
    "image": "./assets/best-angular-app-examples.png",
    "price": 499
}];
  constructor(private store: Store) {
    this.store.dispatch(loadProductsSuccess({'products': this.products}));
     this.store.select(selectAllProducts).subscribe((res) => {
      this.newProducts = res;
     });
  }
ngOnInit() {}

addToCart(id: number) {

}
}
