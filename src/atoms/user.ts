import axios from 'axios';
import { atom } from 'jotai';

export const tokenAtom = atom('');
export const nameAtom = atom('');
export const emailAtom = atom('');

export const accessTokenAtom = atom(
    (get) => get(tokenAtom),
    (_get, set, update: string) => {
        window.localStorage.setItem('token', update);
        axios.defaults.headers.common.Authorization = `Bearer ${update}`;
        set(tokenAtom, update);
    }
);
