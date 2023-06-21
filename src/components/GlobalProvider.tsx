import { emailAtom, nameAtom } from '@/atoms/user';
import axios from 'axios';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';

export default function GlobalProvider({ children }: { children: React.ReactNode }) {
    const setName = useSetAtom(nameAtom);
    const setEmail = useSetAtom(emailAtom);
    useEffect(() => {
        if (window.localStorage.getItem('email')) setEmail(window.localStorage.getItem('email') ?? '');
        if (window.localStorage.getItem('name')) setName(window.localStorage.getItem('name') ?? '');
        if (window.localStorage.getItem('token')) axios.defaults.headers.common.Authorization = window.localStorage.getItem('token') ?? '';
    }, [setEmail, setName]);
    return <>{children}</>;
}
