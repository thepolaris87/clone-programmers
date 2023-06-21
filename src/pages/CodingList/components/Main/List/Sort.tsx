import { useEffect, useState } from 'react';
import arrow from '@assets/images/codingList/arrow.svg';
import { useSetAtom } from 'jotai';
import { sortAtom } from '@/atoms/codingList';

export default function Sort() {
    const [visibility, setVisibility] = useState(false);
    const [title, setTitle] = useState('최신순');
    const array = ['정답률 높은 문제', '정답률 낮은 문제', '최신순'];
    const setSort = useSetAtom(sortAtom);
    
    const onClick = () => setVisibility(!visibility);

    const onSortClick = (title: string) => {
        setTitle(title);
        setVisibility(!visibility);
    };

    useEffect(() => {
        setSort(title)
    }, [title])
    return (
        <div className="relative">
            <div onClick={onClick} className="flex gap-1 cursor-pointer">
                <div>{title}</div>
                <div className='pt-0.5'>
                    <img src={arrow} className='w-[1rem] h-[1rem]'/>
                </div>
            </div>
            {visibility && (
                <article className="absolute right-0">
                    <ul className="border border-[rgb(215, 226, 235)] bg-white rounded mt-[0.5rem] min-w-[10rem] py-[0.5rem] shadow-md">
                        {array.map((el, i) => {
                            return (
                                <li key={i} className="py-[0.25rem] px-[1.5rem] cursor-pointer" onClick={() => onSortClick(el)}>
                                    {el}
                                </li>
                            );
                        })}
                    </ul>
                </article>
            )}
        </div>
    );
}
