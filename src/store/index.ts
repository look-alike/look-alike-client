import { atom } from 'recoil';

export const accuracyState = atom<any>({
  key: 'accuracyState',
  default: 0,
});

export const initialState = atom<string>({
  key: 'initialState',
  default: '',
});
