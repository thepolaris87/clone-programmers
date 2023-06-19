import { atom } from 'jotai';

export const userInfo = atom<{ userName: string; userEmail: string } | undefined>(undefined);

export const userNavi = atom<TNavi>('account');

export const modal = atom({ message: '' });
