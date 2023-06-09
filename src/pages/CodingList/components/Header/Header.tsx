import TopNavBar from '../../../../components/TopNavBar';
import { Navbar } from '@/components/Navbar';
import BottomNavBar from '../../../../components/BottomNavBar';

export default function Header() {
    return (
        <>
            <TopNavBar />
            <Navbar />
            <BottomNavBar />
        </>
    );
}
