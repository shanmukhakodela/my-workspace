import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'
import { select, Store } from '@ngrx/store';
import { loadProductsSuccess } from './+state/products/products.actions';
import { selectAllProducts, selectFilteredProducts, selectSearchQuery } from './+state/products/products.selectors';
import { products } from './mock-products';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductsService } from '../products.service';


@Component({
  selector: 'lib-products',
  standalone: true,
  imports: [CommonModule, MatCardModule, FlexLayoutModule,],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  newProducts: any;
  constructor(private store: Store, private service: ProductsService) {
    // this.store.dispatch(loadProductsSuccess({ 'products': products }));
    this.store.select(selectAllProducts).subscribe((res) => {
      this.newProducts = res;
    });
  }
  ngOnInit() { 
    // this.store.select(selectFilteredProducts).subscribe((res) => {
    //   console.log('new res is', res)
    // })
    // this.store.pipe(select(selectSearchQuery)).subscribe((res1) => {
    //   console.log('asfhsf', res1)
    // })
  }

  addToCart(id: number) {
      this.newProducts = this.newProducts.map((product: { id: any; }) => {
        if(product.id === id) {
          return {...product, added: true}
        }
        return product;
      })
      this.store.dispatch(loadProductsSuccess({ 'products': this.newProducts }));
      this.service.setCounter();
  }
  // buy() {
  //   this.router.navigate(['/subscription']);
  // }
}
