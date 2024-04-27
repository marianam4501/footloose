import { atom } from 'recoil';

export const brandState = atom<string[]>({
  key: 'sizeList',
  default: [],
});
