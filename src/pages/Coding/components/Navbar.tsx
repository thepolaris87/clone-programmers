import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { logo } from '@/assets/images/codingTest';

export const Navbar = ({ setModal, title, category, id, children }: NavbarProps) => {
    return (
        <div className="flex flex-wrap relative w-[100%] justify-between items-center bg-[#0c151c] p-[6px_16px]">
            <span className="flex items-center">
                <img className="w-[24px] mr-[16px]" src={logo} />
                <span className="flex whitespace-nowrap p-[6px_0px]">
                    <Link to="/learn/challenges" className="hidden text-[#98a8b9] text-[14px] mr-[4px] hover:text-white md:block">
                        코딩테스트 연습
                    </Link>
                    <div className="hidden text-[#98a8b9] text-[14px] mx-[4px] md:block">{'>'}</div>
                    <div className="hidden text-[#98a8b9] text-[14px] mx-[4px] md:block">{category}</div>
                    <div className="hidden text-[#98a8b9] text-[14px] mx-[4px] md:block">{'>'}</div>
                    <Link
                        className={classNames(
                            setModal ? 'text-[#ffffff] font-[600] hover:text-white' : 'text-[#98a8b9] font-[400] cursor-pointer hover:text-white',
                            id ? 'cursor-pointer' : 'cursor-text',
                            'text-[14px] mx-[4px]'
                        )}
                        to={`/learn/courses/${id}`}
                        onClick={(e) => !id && e.preventDefault()}
                    >
                        {title}
                    </Link>
                    {children && (
                        <React.Fragment>
                            <div className="text-[#98a8b9] text-[14px] mx-[4px]">{'>'}</div>
                            <div className="text-[#ffffff] text-[14px] mx-[4px] font-[600] cursor-text">{children}</div>
                        </React.Fragment>
                    )}
                </span>
            </span>
            {children === '다른 사람의 풀이' && (
                <span className="whitespace-nowrap">
                    <Link
                        className="hidden bg-[#44576c] text-[white] text-[12px] font-[500] p-[2px_6px] rounded-[4px] hover:bg-[#343a40] md:block"
                        to={`/learn/courses/${id}`}
                    >
                        <h5 className="mt-0.5">다시 풀기</h5>
                    </Link>
                </span>
            )}
            {setModal && (
                <span className="whitespace-nowrap">
                    <button
                        className="hidden text-[#b2c0cc] text-[16px] font-[500] p-[4px_8px] hover:text-white md:block cursor-pointer"
                        onClick={() => setModal(true)}
                    >
                        컴파일 옵션
                    </button>
                </span>
            )}
        </div>
    );
};
