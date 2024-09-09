import { createAction, props } from '@ngrx/store';
import { ProductsEntity } from './products.models';

export const initProducts = createAction('[Products Page] Init');

export const loadProductsSuccess = createAction(
  '[Products/API] Load Products Success',
  props<{ products: ProductsEntity[] }>()
);

export const loadProductsFailure = createAction(
  '[Products/API] Load Products Failure',
  props<{ error: any }>()
);

export const loadFilteredProducts = createAction(
  '[Products/API] Load filtered products',
  props<{products: ProductsEntity[]}>()
);
export const setSearchQuery = createAction(
  '[Products] Set Search Query',
  props<{ filter: string }>()
);