import { atom } from 'recoil';

export const sizeState = atom<string[]>({
  key: 'sizeList',
  default: [],
});
