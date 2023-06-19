import { useAtomValue } from 'jotai';
import { userNavi } from '../atoms';
import { ModalProvider } from '../MyPage.styles';
import Navigator from './Navigator';
import Account from './Account';
import Activity from './Activity';

export default function Main() {
    const navi = useAtomValue(userNavi);
    return (
        <ModalProvider>
            <main className="flex p-4 bg-[#f9fafb]">
                <Navigator />
                <div className="ml-10 flex-1">
                    {navi === 'account' && <Account />}
                    {navi === 'active' && <Activity />}
                </div>
            </main>
        </ModalProvider>
    );
}
