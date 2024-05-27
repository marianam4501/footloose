import { atom } from 'recoil';
import { ProductObject } from '../utils/productObject';
import { recoilPersist } from 'recoil-persist';

const {persistAtom} = recoilPersist({
  key: 'products',
  storage: localStorage,
});

export const productState = atom<ProductObject[]>({
  key: 'productList',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
