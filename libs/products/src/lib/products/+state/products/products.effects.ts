import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as ProductsActions from './products.actions';
import * as ProductsFeature from './products.reducer';

@Injectable()
export class ProductsEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.initProducts),
      switchMap(() =>
        of(ProductsActions.loadProductsSuccess({ products: [] }))
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(ProductsActions.loadProductsFailure({ error }));
      })
    )
  );
}
