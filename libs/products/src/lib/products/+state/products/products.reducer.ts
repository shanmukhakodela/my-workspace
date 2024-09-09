import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as ProductsActions from './products.actions';
import { ProductsEntity } from './products.models';

export const PRODUCTS_FEATURE_KEY = 'products';

export interface ProductsState extends EntityState<ProductsEntity> {
  selectedId?: string | number; // which Products record has been selected
  loaded: boolean; // has the Products list been loaded
  filter: string;
  products: ProductsEntity[];
  filteredProducts: ProductsEntity[];
  error?: string | null; // last known error (if any)
}

export interface ProductsPartialState {
  readonly [PRODUCTS_FEATURE_KEY]: ProductsState;
}

export const productsAdapter: EntityAdapter<ProductsEntity> =
  createEntityAdapter<ProductsEntity>();

export const initialProductsState: ProductsState =
  productsAdapter.getInitialState({
    filter: '',
    products: [],
    filteredProducts: [],
    loaded: false,
  });

export const updateFilter = createReducer(
  initialProductsState,
  on(ProductsActions.setSearchQuery, (state, {filter}) => ({
    ...state,
    searchQuery: filter,
    filteredProducts: filterProducts(state.products, filter)
  })),
  on(ProductsActions.loadFilteredProducts, (state, { products }) => ({
    ...state,
    products,
    filteredProducts: filterProducts(products, state.filter)
  })),
  
);

function filterProducts(products: ProductsEntity[], query: string): ProductsEntity[] {
  if(!query.trim()) {
    return products;
  }
  console.log('query is', query);
  return products.filter(product => product.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
}
const reducer = createReducer(
  initialProductsState,
  on(ProductsActions.initProducts, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ProductsActions.loadProductsSuccess, (state, { products }) =>
    productsAdapter.setAll(products, { ...state, loaded: true })
  ),
  on(ProductsActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function productsReducer(
  state: ProductsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
