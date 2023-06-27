import { nameAtom } from '@/atoms/user';
import Position from './Position';
import { useAtomValue } from 'jotai';
import { ReactComponent as BannerBtn } from '@assets/images/codingList/bannerBtn.svg';

export default function Bottom() {
    const name = useAtomValue(nameAtom);
    return (
        <div className="border-t border-list_border p-[1.5rem] hidden lg:block">
            <div className="flex items-center">
                <div className="font-[NotoSansKRBold] text-[1rem]">{name ? name + '님께 추천하는 포지션' : '추천 포지션'}</div>
                <div>
                    <BannerBtn />
                </div>
            </div>
            <Position />
        </div>
    );
}
