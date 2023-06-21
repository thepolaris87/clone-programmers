import { emailAtom, nameAtom } from '@/atoms/user';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';

export default function GlobalProvider({ children }: { children: React.ReactNode }) {
    const setName = useSetAtom(nameAtom);
    const setEmail = useSetAtom(emailAtom);
    useEffect(() => {
        if (window.localStorage.getItem('email')) setEmail(window.localStorage.getItem('email') ?? '');
        if (window.localStorage.getItem('name')) setName(window.localStorage.getItem('name') ?? '');
    }, [setEmail, setName]);
    return <>{children}</>;
}
