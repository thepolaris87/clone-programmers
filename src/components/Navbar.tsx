import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { toastAtom } from '@/atoms/toast';
import { useSetAtom } from 'jotai';
import { ReactComponent as ProgrammersLogo } from '@/assets/images/codingTest/programmers.svg';

export const Navbar = () => {
    const navigate = useNavigate();
    const toastMessage = useSetAtom(toastAtom);
    const [value, setValue] = useState('');
    const navbars = ['강의', '국비지원', '코딩테스트 연습', 'MY 스쿨', '강사되기', '캠퍼스'];

    const onClick = (value: string) => {
        setValue(value);
        if (value === '코딩테스트 연습') navigate('/learn/challenges');
        else toastMessage({ message: '페이지 준비 중입니다.' });
    };

    return (
        <div className="flex w-[100%] justify-center items-center box-border">
            <div className="flex flex-wrap w-[100%] max-w-[1200px] px-[20px] items-center overflow-x-auto whitespace-nowrap box-border">
                <div className="mr-[80px] flex items-center box-border w-[190px] md:w-[260px]">
                    <ProgrammersLogo />
                </div>
                <span className="flex items-center whitespace-nowrap h-[50px] md:h-[78px]">
                    {navbars.map((navbar, index) => {
                        return (
                            <div
                                key={index}
                                className={classNames(
                                    'text-[14px] md:text-[16px] font-[NotoSansKRMedium] mr-[48px] cursor-pointer',
                                    value === navbar ? 'text-[#429488]' : 'text-[black]'
                                )}
                                onClick={() => onClick(navbar)}
                            >
                                {navbar}
                            </div>
                        );
                    })}
                </span>
            </div>
        </div>
    );
};
