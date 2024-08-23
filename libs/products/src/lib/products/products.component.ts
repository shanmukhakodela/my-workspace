import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'
import { Store } from '@ngrx/store';
import { loadProductsSuccess } from './+state/products/products.actions';
import { selectAllProducts } from './+state/products/products.selectors';
import { products } from './mock-products';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'lib-products',
  standalone: true,
  imports: [CommonModule, MatCardModule, FlexLayoutModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  newProducts: any;

  constructor(private store: Store, private router: Router) {
    this.store.dispatch(loadProductsSuccess({ 'products': products }));
    this.store.select(selectAllProducts).subscribe((res) => {
      this.newProducts = res;
    });
  }
  ngOnInit() { }

  addToCart(id: number) {

  }
  buy() {
    this.router.navigate(['/dashboard/subscription'])
  }
}
