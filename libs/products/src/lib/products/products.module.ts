import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideStore, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromProducts from './+state/products/products.reducer';
import { ProductsEffects } from './+state/products/products.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
})
export class ProductsModule {}
