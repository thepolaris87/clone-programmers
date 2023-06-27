import { toastAtom } from '@/atoms/toast';
import { position } from '@/pages/CodingList/data';
import career from '@assets/images/codingList/career.svg';
import region from '@assets/images/codingList/region.svg';
import { useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';

const pages: position[][] = [];
for (let i = 0; i < position.length; i += 3) {
    const page: position[] = position.slice(i, i + 3);
    pages.push(page);
}

export default function Position() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (pages.length < 3) return;

        const autoPage = setTimeout(() => {
            if (count === pages.length - 1) {
                setCount(0);
            } else {
                setCount((prev) => prev + 1);
            }
        }, 5000);
        return () => {
            clearTimeout(autoPage);
        };
    }, [count]);

    const setMessage = useSetAtom(toastAtom);
    const onBannerClick = () => {
        setMessage({ message: '준비 중입니다.' });
    };

    return (
        <div className="relative h-[410px]">
            {pages[count].map((el, i) => {
                return (
                    <div key={i} className="flex mt-[1.5rem] gap-[1rem]">
                        <div className="w-[3.75rem] h-[3.75rem] cursor-pointer">
                            <img className="object-contain" onClick={onBannerClick} src={el.logo}></img>
                        </div>
                        <div>
                            <div className="text-[0.875rem] font-[NotoSansKRMedium] cursor-pointer" onClick={onBannerClick}>
                                {el.title}
                            </div>
                            <div className="flex text-[0.75rem] gap-3 mt-[0.3125rem]">
                                <div className="text-[#7890A0] cursor-pointer font-[NotoSansKRMedium]" onClick={onBannerClick}>
                                    {el.company}
                                </div>
                                {el.response && <div className="bg-[#F0F5FA] text-[0.625rem] pt-0.5 text-[#0078FF] font-[NotoSansKRBold] px-2 rounded">{el.response}</div>}
                            </div>
                            <div className="flex items-center text-[0.75rem] text-[#98A8B9] gap-[0.375rem] mt-[0.375rem]">
                                <img className="w-[1.25rem] h-[1.25rem]" src={career} />
                                <div className="pt-1">{el.career}</div>
                            </div>
                            <div className="flex text-[0.75rem] text-[#98A8B9] gap-[0.375rem] mt-[0.375rem]">
                                <img className="w-[1.25rem] h-[1.25rem]" src={region} />
                                <div className="pt-[0.05rem]">{el.region}</div>
                            </div>
                        </div>
                    </div>
                );
            })}
            <div className="absolute flex gap-1 justify-center pt-7 items-center bottom-0 left-1/2">
                <span
                    className="w-[8px] h-[8px] border-[0.0625rem] rounded-full cursor-pointer"
                    style={{ backgroundColor: count === 0 ? '#B2C0CC' : '' }}
                    onClick={() => setCount(0)}
                ></span>
                <span
                    className="w-[8px] h-[8px] border-[0.0625rem] rounded-full cursor-pointer"
                    style={{ backgroundColor: count === 1 ? '#B2C0CC' : '' }}
                    onClick={() => setCount(1)}
                ></span>
                <span
                    className="w-[8px] h-[8px] border-[0.0625rem] rounded-full cursor-pointer"
                    style={{ backgroundColor: count === 2 ? '#B2C0CC' : '' }}
                    onClick={() => setCount(2)}
                ></span>
            </div>
        </div>
    );
}
