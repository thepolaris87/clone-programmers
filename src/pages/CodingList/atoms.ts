import { atom } from 'jotai';

export const listDataAtom = atom([{}]);
export const sortAtom = atom('');

export const filterAtom = atom<string[]>([]);

export const userModalAtom = atom<boolean>(false);

export const newFilterAtom = atom<{level: [], test: []}>({level: [], test: []});
