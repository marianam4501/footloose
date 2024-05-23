import { atom } from 'recoil';
import { UserObject } from '../utils/userObject';
import { recoilPersist } from 'recoil-persist';

const {persistAtom} = recoilPersist({
    key: 'user',
    storage: localStorage,
});

export const userState = atom<UserObject>({
  key: 'user',
  default: {
    id: 0,
    username: "",
    token: "",
    role: 0,
  },
  effects_UNSTABLE: [persistAtom],
});
