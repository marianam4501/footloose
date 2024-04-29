import { atom } from 'recoil';
import { CartProductObject } from '../utils/cartProductObject';

import { recoilPersist } from 'recoil-persist';

const {persistAtom} = recoilPersist({
  key: 'recoilPersist',
  storage: localStorage,
});

export const cartState = atom<CartProductObject[]>({
  key: 'cartList',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
