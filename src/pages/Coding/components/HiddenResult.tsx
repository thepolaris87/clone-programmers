import React from 'react';
import classNames from 'classnames';
import { Spinner } from '@/components/Spinner';
import { ResultProps } from '../CodingTest';

type HiddenResultProps = {
    data: ResultProps[];
    answers: { [key: number]: number | string | null | string[] };
    totalNum: string;
};
export const HiddenResult = ({ data, answers, totalNum }: HiddenResultProps) => {
    return (
        <div className="mb-[21px] p-0 bc-[#263747] whitespace-pre-wrap break-words">
            <div className="text-[#5f7f90] text-[12.25px] m-[4px_0] leading-5">정확성&nbsp;&nbsp;&nbsp;&nbsp;테스트</div>
            {data.map((result: ResultProps, index: number) => {
                return (
                    <table key={index} className="w-[calc(100%-16px)] pr-[16px] border-[#172334] border-[1px]">
                        <tbody>
                            <tr>
                                <td className="w-[160px] bg-[#202b3d] text-[#44576c] text-[14px] p-[4px_16px] leading-[1.5] text-right">
                                    테스트&nbsp;{index + 1}&nbsp;&nbsp;&#62;
                                </td>
                                <td
                                    className={classNames(
                                        answers[index] === '통과' ? 'text-[#0078ff]' : 'text-[#d32f2f]',
                                        'bg-[#202b3d] text-[14px] p-[2px_8px_2px_0] leading-[1.5]'
                                    )}
                                >
                                    {answers[index] === null ? <Spinner /> : answers[index]}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                );
            })}
            {Object.keys(answers).every((answer) => answer !== null) && (
                <React.Fragment>
                    <p className="m-[24px_0_8px_0] text-[#98abb9] text-[12.25px] leading-5">채점 결과</p>
                    <p className="my-[4px] text-[#5F7F90] text-[12.25px] leading-5">정확성 : {totalNum}</p>
                    <p className="my-[4px] text-[#5F7F90] text-[12.25px] leading-5">합계 : {totalNum} / 100.0</p>
                </React.Fragment>
            )}
        </div>
    );
};
