import { emailAtom, nameAtom, accessTokenAtom } from '@/atoms/user';
import { useAtom, useSetAtom } from 'jotai';
import { useEffect } from 'react';

export default function GlobalProvider({ children }: { children: React.ReactNode }) {
    const setName = useSetAtom(nameAtom);
    const setEmail = useSetAtom(emailAtom);
    const [token, setToken] = useAtom(accessTokenAtom);

    useEffect(() => {
        if (window.localStorage.getItem('email')) setEmail(window.localStorage.getItem('email') ?? '');
        if (window.localStorage.getItem('name')) setName(window.localStorage.getItem('name') ?? '');
        // if (window.localStorage.getItem('token')) axios.defaults.headers.common.Authorization = window.localStorage.getItem('token') ?? '';
        setToken(window.localStorage.getItem('token') ?? 'tempToken');
    }, [setEmail, setName, setToken]);

    if (!token) return null;
    return <>{children}</>;
}
