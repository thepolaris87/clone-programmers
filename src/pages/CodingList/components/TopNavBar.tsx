import React, { useState } from 'react';

export default function TopNavBar() {
    const [selectMenu, setSelectMenu] = useState<string>('스쿨');
    const menu = ['홈', '스쿨', '커리어', '커뮤니티'];
    return (
        <div className="flex w-[100%] justify-center items-center px-[16px] box-border border-b border-slate-100">
            <div className="flex flex-wrap w-[100%] max-w-[75rem] h-[2.5rem] px-[20px] items-center overflow-x-auto whitespace-nowrap box-border justify-between text-[0.875rem]">
                <div className="flex items-center font-bold">
                    {menu.map((el, i) => {
                        return (
                            <div key={i} className={`mr-[2.5rem] ${selectMenu === el ? 'text-black' : 'text-navbar_gray1'}`} onClick={() => setSelectMenu(el)}>
                                {el}
                            </div>
                        );
                    })}
                </div>
                <div className="flex items-center justify-between ">
                    <span className="flex items-center mr-[1.5rem] text-navbar_gray2">
                        <div className="">로그인</div>
                        <svg width="4" height="4" fill="none" xmlns="http://www.w3.org/2000/svg" className="G0E1OVA5O87wEsrH564S m-[0.5rem]">
                            <circle r="2" transform="matrix(1 0 0 -1 2 2)" fill="#C4C4C4"></circle>
                        </svg>
                        <div>회원가입</div>
                    </span>
                    <div className="text-navbar_blue">기업서비스</div>
                </div>
            </div>
        </div>
    );
}
