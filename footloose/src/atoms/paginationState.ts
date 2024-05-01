import { atom } from 'recoil';

interface PaginationInfo {
    startIndex: number,
    endIndex: number,
}
export const paginationState = atom<PaginationInfo>({
  key: 'paginationInfo',
  default: {
    startIndex: 0,
    endIndex: 9,
  },
});
