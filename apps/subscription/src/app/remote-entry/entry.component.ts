import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectAllProducts } from 'libs/products/src/lib/products/+state/products/products.selectors';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductsEntity } from 'libs/products/src/lib/products/+state/products/products.models';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent,MatCardModule, FlexLayoutModule,],
  selector: 'app-subscription-entry',
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.scss',
})
export class RemoteEntryComponent implements OnInit {
newProducts: ProductsEntity[] = [];
sumOfProducts = 0;
noOfProducts = 0;
  constructor(private router: Router, private store: Store) {
    this.store.select(selectAllProducts).subscribe((res) => {
      this.newProducts = res.filter((product : any) => {
       if(product.added) return product;
      });
    });
  }
  ngOnInit(): void {
    this.sumOfProducts = this.newProducts.reduce((acc, curr) => acc + curr.price, 0);
    this.noOfProducts = this.newProducts.length;
  }
  dashboard() {
    this.router.navigate(['/dashboard']);
  }
}
