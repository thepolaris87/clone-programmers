import { userModalAtom } from '@/atoms/codingList';
import { emailAtom, nameAtom } from '@/atoms/user';
import { useAtomValue, useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TopNavBar() {
    const [selectMenu, setSelectMenu] = useState<string>('스쿨');
    const menu = ['홈', '스쿨', '커리어', '커뮤니티'];
    const name = useAtomValue(nameAtom);
    const email = useAtomValue(emailAtom);
    const navigate = useNavigate();
    const [userModalOpen, setUserModalOpen] = useState(false);
    const setUserModalAtom = useSetAtom(userModalAtom);

    useEffect(() => {
        setUserModalAtom(userModalOpen);
    }, [userModalOpen]);

    useEffect(() => {
        setUserModalOpen(false);
    }, [email]);

    return (
        <div className="flex w-[100%] justify-center items-center box-border border-b border-slate-100 px-[1rem]">
            <div className="flex flex-wrap w-[100%] max-w-[75rem] h-[2.5rem] items-center overflow-x-auto whitespace-nowrap box-border justify-between text-[0.875rem]">
                <div className="flex items-center font-bold">
                    {menu.map((el, i) => {
                        return (
                            <div
                                key={i}
                                className={`mr-[2.5rem] cursor-pointer ${selectMenu === el ? 'text-black' : 'text-navbar_gray1'}`}
                                onClick={() => setSelectMenu(el)}
                            >
                                {el}
                            </div>
                        );
                    })}
                </div>
                {name ? (
                    <div className="flex gap-2 items-center">
                        <button>
                            <div className="text-[#0084FF] text-[14px] pt-[0.125rem]" onClick={() => setUserModalOpen(!userModalOpen)}>
                                {name}님
                            </div>
                        </button>
                        <svg viewBox="0 0 20 21" className="w-[1.125rem] cursor-pointer" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18.378 16.761c.028.003.057 0 .083-.011a.152.152 0 00.065-.049.127.127 0 00.007-.145l-2.038-4.651a1.263 1.263 0 01-.089-.425V7.388c0-1.518-.675-2.973-1.876-4.046-1.202-1.073-2.832-1.675-4.531-1.675-1.7 0-3.33.602-4.531 1.675C4.266 4.415 3.591 5.87 3.591 7.388v4.092a1.266 1.266 0 01-.09.425l-2.039 4.651a.129.129 0 00.01.145.154.154 0 00.065.048c.026.01.054.015.083.012h16.758zM13.111 16.444a3.11 3.11 0 11-6.222 0"
                                stroke="#686868"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                            ></path>
                        </svg>
                    </div>
                ) : (
                    <div className="flex items-center justify-between ">
                        <span className="flex items-center mr-[1.5rem] text-navbar_gray2">
                            <div className="cursor-pointer" onClick={() => navigate('/sign-in')}>
                                로그인
                            </div>
                            <svg width="4" height="4" fill="none" xmlns="http://www.w3.org/2000/svg" className="G0E1OVA5O87wEsrH564S m-[0.5rem]">
                                <circle r="2" transform="matrix(1 0 0 -1 2 2)" fill="#C4C4C4"></circle>
                            </svg>
                            <div className="cursor-pointer" onClick={() => navigate('/sign-in')}>
                                회원가입
                            </div>
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}
