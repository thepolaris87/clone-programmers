import { useState, useEffect } from 'react';
import classNames from 'classnames';
import styled from '@emotion/styled';

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    background-color: rgba(215, 226, 235, 0.5);
    font-size: 13px;
`;

export default function Pagination({ onClickPage, totalNum, number }: { onClickPage: (value: number) => void; totalNum: number; number?: number }) {
    const [pages, setPages] = useState<number[]>([]);
    const [page, setPage] = useState(1);
    const startPage = 1 === page || pages.length === 1;
    const endPage = pages.length === page || pages.length === 1 || pages.length === 0;

    const onClick = (idx: number) => {
        setPage(idx + 1);
        onClickPage(idx);
    };

    useEffect(() => {
        const num = Math.ceil(totalNum / (number ? number : 20));
        for (let index = 0; index < num; index++) {
            setPages((prev) => {
                return [...prev, index];
            });
        }
        return () => {
            setPages([]);
        };
    }, [totalNum, number]);

    return (
        <div className="flex justify-center items-center gap-[9px]">
            <Button
                className={classNames(startPage ? 'text-[rgb(38,55,71,0.3)]' : 'text-[black]', 'h-[22px] w-[22px]')}
                onClick={() => onClick(0)}
                disabled={startPage}
            >
                <h5 className="text-[1px]">|&#60;</h5>
            </Button>
            <Button
                className={classNames(startPage ? 'text-[rgb(38,55,71,0.3)]' : 'text-[black]', 'h-[28px] w-[28px]')}
                onClick={() => onClick(page - 2)}
                disabled={startPage}
            >
                <h5>&#60;</h5>
            </Button>
            <span className="flex justify-center items-center flex-wrap">
                {pages.map((pageId, index) => {
                    return (
                        <button
                            key={index}
                            className={classNames(
                                page === pageId + 1 ? 'bg-[black] text-[white] shadow-[rgba(0,0,0,0.4)] shadow-[0_4px_10px]' : 'bg-[rgba(215,226,235,0.5)]',
                                pages.length === 1
                                    ? 'rounded-[6px]'
                                    : pageId + 1 === 1
                                    ? 'rounded-[6px_0_0_6px]'
                                    : pageId + 1 === pages.length
                                    ? 'rounded-[0_6px_6px_0]'
                                    : 'rounded-none',
                                'flex justify-center items-center h-[28px] w-[28px] p-[5px_6px] text-[13px] font-[NotoSansKRBold]'
                            )}
                            onClick={() => onClick(pageId)}
                        >
                            <h5 className="mb-[2px]">{pageId + 1}</h5>
                        </button>
                    );
                })}
            </span>
            <Button
                className={classNames(endPage ? 'text-[rgb(38,55,71,0.3)]' : 'text-[black]', 'h-[28px] w-[28px]')}
                onClick={() => onClick(page)}
                disabled={endPage ? true : false}
            >
                <h5>&#62;</h5>
            </Button>
            <Button
                className={classNames(endPage ? 'text-[rgb(38,55,71,0.3)]' : 'text-[black]', 'h-[22px] w-[22px]')}
                onClick={() => onClick(pages.length - 1)}
                disabled={endPage ? true : false}
            >
                <h5 className="text-[1px]">&#62;|</h5>
            </Button>
        </div>
    );
}
