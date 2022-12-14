import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const inputLoginId = atom({
  key: 'inputLoginId',
  default: {
    userId: '',
  },
  effects: [persistAtom],
});

export const inputLoginPwd = atom({
  key: 'inputLoginPwd',
  default: {
    userPwd: '',
  },
});

export const loginData = atom({
  key: 'loginData',
  default: {
    userId: '',
    userPwd: '',
    message: 'FAILED',
  },
});

export const loginMessage = atom({
  key: 'loginMessage',
  default: { userId: '', message: 'FAILED' },
  effects: [persistAtom],
});
