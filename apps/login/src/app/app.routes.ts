import { Route } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { provideState } from '@ngrx/store';
import * as fromProducts from '../../../../libs/products/src/lib/products/+state/products/products.reducer';

export const appRoutes: Route[] = [
  {
    path: 'cart',
    loadChildren: () =>
      import('subscription/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: SigninComponent,
  },
  {
    path: 'dashboard',
    loadChildren: () => import('dashboard/Routes').then((m) => m.remoteRoutes),
    providers: [
      provideState({
        name: fromProducts.PRODUCTS_FEATURE_KEY,
        reducer: fromProducts.productsReducer,
      }),
    ],
  },
];
