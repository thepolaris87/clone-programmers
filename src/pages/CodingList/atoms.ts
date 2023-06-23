import { atom } from 'jotai';

export const listDataAtom = atom([{}]);
export const sortAtom = atom('');

export const filterAtom = atom<string[]>([]);

export const userModalAtom = atom<boolean>(false);

// ['level', 'level', 'test', 'test']
// =>
// ['level', 'level']
// ['test', 'test', 'test']

// 위에처럼 나눠주는 작업을 필터 돌릴때 하는게 아니라
// 애초에 필터에 나눠서 쌓아주는거죠

// export const newFilterAtom = atom<{level: [], test: []}>({});
