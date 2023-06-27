import { toastAtom } from '@/atoms/toast';
import { emailAtom, nameAtom } from '@/atoms/user';
import { userModalAtom } from '@/pages/CodingList/atoms';
import Modal from '@/pages/CodingList/components/Main/Modal';
import { useAtomValue, useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Bell from '@assets/images/codingList/bell.svg';
import { ReactComponent as Dot } from '@assets/images/codingList/dot.svg';

const menu = ['홈', '스쿨', '커리어', '커뮤니티'];

export default function TopNavBar() {
    const [selectMenu, setSelectMenu] = useState<string>('스쿨');
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

    const setMessage = useSetAtom(toastAtom);
    const onClick = (msg: string) => {
        setMessage({ message: msg });
    };
    return (
        <div className="flex flex-col w-[100%] justify-center items-center box-border border-b border-slate-100">
            <div className="flex flex-wrap w-[100%] px-[20px] max-w-[75rem] h-[2.5rem] items-center overflow-x-auto whitespace-nowrap box-border justify-between text-[0.875rem]">
                <div className="flex items-center font-bold">
                    {menu.map((el, i) => {
                        return (
                            <div
                                key={i}
                                className={`mr-[2.5rem] cursor-pointer ${selectMenu === el ? 'text-black' : 'text-navbar_gray1'}`}
                                onClick={() => {
                                    setSelectMenu(el);
                                    if (el !== '스쿨') onClick('페이지 준비 중입니다.');
                                    if (el === '스쿨') navigate('/learn/challenges');
                                }}
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
                        <button onClick={() => onClick('준비 중입니다.')}>
                            <img className="w-[1.1rem] h-[1.1rem]" src={Bell} />
                        </button>
                    </div>
                ) : (
                    <div className="flex items-center justify-between ">
                        <span className="flex items-center mr-[1.5rem] text-navbar_gray2">
                            <div className="cursor-pointer" onClick={() => navigate('/sign-in')}>
                                로그인
                            </div>
                            <Dot />
                            <div className="cursor-pointer" onClick={() => navigate('/sign-in', { state: 'sign-up' })}>
                                회원가입
                            </div>
                        </span>
                    </div>
                )}
            </div>
            <div className="flex flex-wrap relative w-[100%] max-w-[75rem] items-center">
                <div>{userModalOpen && <Modal />}</div>
            </div>
        </div>
    );
}
