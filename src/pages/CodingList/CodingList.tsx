import { useAtomValue } from 'jotai';
import Footer from '../../components/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Modal from './components/Main/Modal';
import { useQuery } from 'react-query';
import { getChallenges } from '@/apis/api';
import { userModalAtom } from './atoms';

export default function CodingList() {
    const userModalOpen = useAtomValue(userModalAtom);
    useQuery(['questions'], getChallenges);

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
