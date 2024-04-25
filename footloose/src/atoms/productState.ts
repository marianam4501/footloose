import { atom } from 'recoil';
import { ProductObject } from '../utils/productObject';

export const productState = atom<ProductObject[]>({
  key: 'productList',
  default: [],
});
