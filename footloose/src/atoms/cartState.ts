import { atom } from 'recoil';
import { CartObject } from '../utils/cartObject';

import { recoilPersist } from 'recoil-persist';

const {persistAtom} = recoilPersist({
  key: 'cart',
  storage: localStorage,
});

export const cartState = atom<CartObject>({
  key: 'cart',
  default: {
    id: 0,
    products: [],
    ownerId: 0,
    subtotal: 0,
    taxes: 0,
    total: 0,
},
  effects_UNSTABLE: [persistAtom],
});
