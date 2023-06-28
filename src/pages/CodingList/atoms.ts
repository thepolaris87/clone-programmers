import { atom } from 'jotai';

export const listDataAtom = atom([{}]);

export const sortAtom = atom('');

export const userModalAtom = atom<boolean>(false);

export const filterAtom = atom<{level: string[], test: string[]}>({level: [], test: []});
