import { Route } from '@angular/router';
// import { provideState } from '@ngrx/store';
// import * as fromProducts from '../../../../libs/products/src/lib/products/+state/products/products.reducer';


export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./remote-entry/entry.routes').then((m) => m.remoteRoutes),
    // providers: [
    //   provideState({ 'name': fromProducts.PRODUCTS_FEATURE_KEY,
    //     'reducer': fromProducts.productsReducer })
    // ]
  },
];
