import { atom } from 'jotai';

type TNavi = 'account' | 'active' | 'school' | 'history' | 'resume' | 'position' | 'proposal' | 'program';

export const userInfo = atom<{ userName: string; userEmail: string } | undefined>(undefined);

export const userNavi = atom<TNavi>('account');
