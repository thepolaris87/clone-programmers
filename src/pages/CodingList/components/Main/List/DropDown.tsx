import { filterAtom } from '@/atoms/codingList';
import { useAtomValue } from 'jotai';
import React, { Children } from 'react';
interface props {
    visibility: boolean;
    onClick: any;
    title: string;
    array: any;
    style: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
}
export default function Dropdown({ visibility, onClick, title, array, style, onChange }: props) {
  const filters = useAtomValue(filterAtom);

    
    return (
        <div className="bg-white">
            <button
                onClick={onClick}
                className={`flex w-full items-center py-[0.6875rem] px-[1.25rem] border border-[rgb(255, 255, 255)] justify-between h-[40px] font-bold rounded-[0.25rem] ${style}`}
            >
                {title}
                <svg
                    width="1.875rem"
                    height="1.875rem"
                    viewBox="0 0 9 6"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[0.5625rem] h-[0.4375rem]"
                >
                    <path d="M4.5 6L8.39711 0.75H0.602886L4.5 6Z" fill="currentColor"></path>
                </svg>
            </button>
            <article className="absolute z-10">
                {visibility ? (
                    <ul
                        className={`border border-[rgb(215, 226, 235)] bg-white mt-[0.25rem] p-[1rem] max-h-[18.5rem] min-w-max pr-[1rem] rounded-[0.25rem] text-[0.875rem] overflow-auto ${style}`}
                    >
                        {array.map((el: string, i: number) => {
                          const checked = filters.includes(el);                          
                            return (
                                <li key={i} className=" leading-7">
                                    <input type="checkbox" className="mx-1 border-[0.125rem] mb-[0.375rem] mt-[0.25rem]" checked={checked} onChange={(e) => onChange?.(e, el)} />
                                    <span>{el}</span>
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    ''
                )}
            </article>
        </div>
    );
}
