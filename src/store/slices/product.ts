// third-party
import { createSlice } from '@reduxjs/toolkit';

// project imports
import axios from 'utils/axios';
import { dispatch } from '../index';

// types
import { DefaultRootStateProps } from 'types';
import { ProductsFilter, Address } from 'types/e-commerce';
import { IProductInfo } from 'types/product';

// ----------------------------------------------------------------------

const MOCK_PRODUCTS: IProductInfo[] = [
  {
    id: 1,
    name: 'Кроссовки Nike Air Max 90',
    brand: 'Nike',
    size: [{ value: '42' }],
    sizeCountry: 'EU',
    description:
      'Классические кроссовки Nike Air Max 90 с воздушной подушкой для комфорта и амортизации. Идеально подходят для повседневной носки.',
    additionalMaterials: ['Кожа', 'Синтетика', 'Резина']
  },
  {
    id: 2,
    name: 'Ботинки Timberland',
    brand: 'Timberland',
    size: [{ value: '43' }],
    sizeCountry: 'US',
    description:
      'Прочные кожаные ботинки Timberland с водонепроницаемой мембраной. Идеально подходят для прогулок по пересеченной местности.',
    additionalMaterials: ['Кожа', 'Текстиль', 'Резина']
  },
  {
    id: 3,
    name: 'Сандалии Birkenstock',
    brand: 'Birkenstock',
    size: [{ value: '40' }],
    sizeCountry: 'EU',
    description: 'Комфортные сандалии Birkenstock из натуральной кожи с анатомической стелькой. Идеально подходят для жаркой погоды.',
    additionalMaterials: ['Кожа', 'Пробка', 'Резина']
  }
];

const initialState: DefaultRootStateProps['product'] = {
  error: null,
  products: [],
  productsAll: MOCK_PRODUCTS,
  product: null,
  relatedProducts: [],
  reviews: [],
  addresses: []
};

const slice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.productsAll = [...state.productsAll, action.payload];
    },
    // HAS ERROR
    hasError(state, action) {
      state.error = action.payload;
    },

    // GET PRODUCTS
    getProductsSuccess(state, action) {
      state.products = action.payload;
    },

    // FILTER PRODUCTS
    filterProductsSuccess(state, action) {
      state.products = action.payload;
    },

    // GET PRODUCT
    getProductSuccess(state, action) {
      state.product = action.payload;
    },

    // GET RELATED PRODUCTS
    getRelatedProductsSuccess(state, action) {
      state.relatedProducts = action.payload;
    },

    // GET PRODUCT REVIEWS
    getProductReviewsSuccess(state, action) {
      state.reviews = action.payload;
    },

    // GET ADDRESSES
    getAddressesSuccess(state, action) {
      state.addresses = action.payload;
    },

    // ADD ADDRESS
    addAddressSuccess(state, action) {
      state.addresses = action.payload;
    },

    // EDIT ADDRESS
    editAddressSuccess(state, action) {
      state.addresses = action.payload;
    }
  }
});

export const { addProduct } = slice.actions;

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function getProducts() {
  return async () => {
    try {
      const response = await axios.get('/api/products/list');
      dispatch(slice.actions.getProductsSuccess(response.data.products));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function filterProducts(filter: ProductsFilter) {
  return async () => {
    try {
      const response = await axios.post('/api/products/filter', { filter });
      dispatch(slice.actions.filterProductsSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getProduct(id: string | undefined) {
  return async () => {
    try {
      const response = await axios.post('/api/product/details', { id });
      dispatch(slice.actions.getProductSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getRelatedProducts(id: string | undefined) {
  return async () => {
    try {
      const response = await axios.post('/api/product/related', { id });
      dispatch(slice.actions.getRelatedProductsSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getProductReviews() {
  return async () => {
    try {
      const response = await axios.get('/api/review/list');
      dispatch(slice.actions.getProductReviewsSuccess(response.data.productReviews));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getAddresses() {
  return async () => {
    try {
      const response = await axios.get('/api/address/list');
      dispatch(slice.actions.getAddressesSuccess(response.data.address));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function addAddress(address: Address) {
  return async () => {
    try {
      const response = await axios.post('/api/address/new', address);
      dispatch(slice.actions.addAddressSuccess(response.data.address));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function editAddress(address: Address) {
  return async () => {
    try {
      const response = await axios.post('/api/address/edit', address);
      dispatch(slice.actions.editAddressSuccess(response.data.address));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
