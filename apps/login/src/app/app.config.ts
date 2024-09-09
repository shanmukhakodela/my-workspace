import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import * as fromProducts from '../../../../libs/products/src/lib/products/+state/products/products.reducer';
import { ProductsEffects } from 'libs/products/src/lib/products/+state/products/products.effects';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideAnimations(),
    provideStore(),
    importProvidersFrom(
      StoreModule.forRoot(fromProducts.productsReducer),
      EffectsModule.forRoot(ProductsEffects),
      StoreModule.forFeature(fromProducts.PRODUCTS_FEATURE_KEY,  fromProducts.productsReducer),
      EffectsModule.forFeature(ProductsEffects),
      StoreDevtoolsModule.instrument()
  )
  ],
};
