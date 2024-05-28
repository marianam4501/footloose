import { atom } from 'recoil';
import { OrderObject } from '../utils/orderObject';

import { recoilPersist } from 'recoil-persist';

const {persistAtom} = recoilPersist({
  key: 'orders',
  storage: localStorage,
});

export const orderState = atom<OrderObject[]>({
  key: 'orders',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
