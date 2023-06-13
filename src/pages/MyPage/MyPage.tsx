import { useAtom } from 'jotai';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import { userInfo } from './atoms';
import { useEffect } from 'react';

export default function MyPage() {
    const [user, setUser] = useAtom(userInfo);

    useEffect(() => {
        if (!user) setUser({ userName: '김진범', userEmail: 'thepolaris@jei.com' });
    }, [user, setUser]);

    if (!user) return null;

    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
}
