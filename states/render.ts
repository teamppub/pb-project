import { atom } from 'recoil';

export const render = atom<boolean>({
  key: 'Render',
  default: false,
});
