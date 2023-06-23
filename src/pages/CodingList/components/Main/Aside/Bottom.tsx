import { nameAtom } from '@/atoms/user';
import Position from './Position';
import { useAtomValue } from 'jotai';

export default function Bottom() {
    const name = useAtomValue(nameAtom);
    return (
        <div className="border-t border-list_border p-[1.5rem] hidden lg:block">
            <div className="flex items-center">
                <div className="font-extrabold text-[1rem]">{name ? name + '님께 추천하는 포지션' : '추천 포지션'}</div>
                <div>
                    <svg width="1.25rem" className="mb-1" height="1.875rem" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 5L13 10.5L7 16" stroke="currentColor" strokeWidth="2"></path>
                    </svg>
                </div>
            </div>
            <Position />
        </div>
    );
}
