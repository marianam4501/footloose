import { atom } from 'recoil';
import { CartProductObject } from '../utils/cartProductObject';

export const cartState = atom<CartProductObject[]>({
  key: 'cartList',
  default: [],
});
