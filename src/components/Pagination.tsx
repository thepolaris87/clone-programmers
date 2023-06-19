import React, { useState, useEffect } from 'react';
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

export default function Pagination({ onClickPage, totalNum }: { onClickPage: (value: number) => void; totalNum: number }) {
    const [pages, setPages] = useState<number[]>([]);
    const [page, setPage] = useState(1);

    const onClick = (idx: number) => {
        setPage(idx + 1);
        onClickPage(idx);
    };

    useEffect(() => {
        const num = Math.ceil(totalNum / 10);
        for (let index = 0; index < num; index++) {
            setPages((prev) => {
                return [...prev, index];
            });
        }
        return () => {
            setPages([]);
        };
    }, [totalNum]);

    return (
        <React.Fragment>
            <Button
                className={classNames(1 === page || pages.length === 1 ? 'text-[rgb(38,55,71,0.3)]' : 'text-[black]', 'h-[22px] w-[22px]')}
                onClick={() => onClick(0)}
                disabled={1 === page || pages.length === 1 ? true : false}
            >
                |&#60;
            </Button>
            <Button
                className={classNames(1 === page || pages.length === 1 ? 'text-[rgb(38,55,71,0.3)]' : 'text-[black]', 'h-[28px] w-[28px]')}
                onClick={() => onClick(page - 2)}
                disabled={1 === page || pages.length === 1 ? true : false}
            >
                &#60;
            </Button>
            <span className="flex justify-center items-center flex-wrap">
                {pages.map((pageId, index) => {
                    return (
                        <button
                            key={index}
                            className={classNames(
                                page === pageId + 1 ? 'bg-[black] text-[white] shadow-[rgba(0,0,0,0.4)] shadow-[0_4px_10px]' : 'bg-[rgba(215,226,235,0.5)]',
                                pageId + 1 === 1 ? 'rounded-[10px_0_0_10px]' : pageId + 1 === pages.length ? 'rounded-[0_10px_10px_0]' : 'rounded-none',
                                'flex justify-center items-center h-[28px] w-[28px] p-[5px_6px] text-[13px] font-[700]'
                            )}
                            onClick={() => onClick(pageId)}
                        >
                            <h5 className="mt-[2px]">{pageId + 1}</h5>
                        </button>
                    );
                })}
            </span>
            <Button
                className={classNames(pages.length === page || pages.length === 1 ? 'text-[rgb(38,55,71,0.3)]' : 'text-[black]', 'h-[28px] w-[28px]')}
                onClick={() => onClick(page)}
                disabled={pages.length === page || pages.length === 1 ? true : false}
            >
                &#62;
            </Button>
            <Button
                className={classNames(pages.length === page || pages.length === 1 ? 'text-[rgb(38,55,71,0.3)]' : 'text-[black]', 'h-[22px] w-[22px]')}
                onClick={() => onClick(pages.length - 1)}
                disabled={pages.length === page || pages.length === 1 ? true : false}
            >
                &#62;|
            </Button>
        </React.Fragment>
    );
}
