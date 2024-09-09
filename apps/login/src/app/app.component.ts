import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { ProductsService } from 'libs/products/src/lib/products.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loadFilteredProducts, loadProductsSuccess, setSearchQuery } from 'libs/products/src/lib/products/+state/products/products.actions';
import { selectAllProducts } from 'libs/products/src/lib/products/+state/products/products.selectors';
import { products } from 'libs/products/src/lib/products/mock-products';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule,
    MatToolbarModule, MatIcon, MatIconModule, MatBadgeModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'login';
  isLoggedIn = false;
  productsAdded = 0;
  searchForm!: FormGroup;
  newProducts: any;
  constructor(private router: Router, private store: Store, private service: ProductsService) { }
  ngOnInit(): void {
    this.store.dispatch(loadProductsSuccess({ 'products': products }));
    this.store.select(selectAllProducts).subscribe((res) => {
      this.newProducts = res;
      console.log('new pr', this.newProducts)
    });

    this.searchForm = new FormGroup({
      filter: new FormControl()
    })
    if (localStorage.getItem('isLoggedIn')) {
      this.service.setIsLogged(true);
    }
    this.service.getIslogged().subscribe((res) => {
      this.isLoggedIn = res;
      if (this.isLoggedIn) {
        this.service.getCounter().subscribe((res) => {
          this.productsAdded = res;
        })
      }
    })

  }
  logout() {
    localStorage.removeItem('isLoggedIn');
    this.service.setIsLogged(false);
    this.service.setCounter(0);
    this.router.navigate(['/'])
  }
  gotoCart() {
    this.router.navigate(['/cart'])
  }

  submit() {
    const value = this.searchForm.value.filter;
    const newProducts = products.filter((x) => x.name.includes(value));
    // console.log('value', value, newProducts);
    this.store.dispatch(loadProductsSuccess({'products': newProducts}))
    // this.store.dispatch(setSearchQuery(value));
  }
}
