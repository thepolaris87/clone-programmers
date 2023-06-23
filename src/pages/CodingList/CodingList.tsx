import { useAtomValue } from 'jotai';
import Footer from '../../components/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Modal from './components/Main/Modal';
import { userModalAtom } from '@/atoms/codingList';
import { emailAtom } from '@/atoms/user';
import { useEffect } from 'react';

export default function CodingList() {
    const userModalOpen = useAtomValue(userModalAtom);

    return (
        <>
            <div className="hidden sm:block">
                <Header />
                <Main />
                <Footer />
            </div>
            <div>{userModalOpen && <Modal />}</div>
        </>
    );
}
