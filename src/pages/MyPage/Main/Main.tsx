import { useAtom } from 'jotai';
import { userNavi } from '../atoms';
import Navigator from './Navigator/Navigator';
import Account from './Account/Account';

export default function Main() {
    const [navi] = useAtom(userNavi);
    return (
        <main className="flex p-4 bg-[#f9fafb]">
            <Navigator />
            <div className="ml-10 flex-1">{navi === 'account' && <Account />}</div>
        </main>
    );
}
