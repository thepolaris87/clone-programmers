import React from 'react';
import classNames from 'classnames';
import { Spinner } from '@/components/Spinner';

export const TestResult = ({ data, results, answerNum, error }: TestResultProps) => {
    return (
        <React.Fragment>
            {error ? (
                <div className="text-[#d32f2f] text-[20px]">Error : {error}</div>
            ) : (
                <React.Fragment>
                    {data.map((result: ResultProps, index: number) => {
                        const answer = result.output === results[index];
                        if (answer) answerNum += 1;
                        return (
                            <table key={index} className="w-[calc(100%-16px)] pr-[16px] border-[#172334] border-[1px]">
                                <tbody>
                                    <tr>
                                        <td className="bg-[#202b3d] text-[#b2c0cc] text-[14px] p-[4px_16px] leading-[24px]" colSpan={2}>
                                            테스트 &nbsp; {index + 1}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="bg-[#202b3d] text-[#44576c] w-[160px] text-[14px] p-[2px_8px] leading-[24px]" align="right">
                                            입력값&nbsp;
                                            <span className="text-[#44576c] text-[14px]">&#62;</span>
                                        </td>
                                        <td className="bg-[#202b3d] text-[14px] p-[2px_8px_2px_0] leading-[24px]">
                                            {typeof result.input[0] === 'object' ? '[' + String(result.input[0]) + ']' : String(result.input[0])}
                                            {result.input[1] && typeof result.input[1] === 'object'
                                                ? ', [' + String(result.input[1]) + ']'
                                                : result.input[1] && ', ' + String(result.input[1])}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="bg-[#202b3d] text-[#44576c] w-[160px] text-[14px] p-[2px_8px] leading-[24px]" align="right">
                                            기댓값&nbsp;
                                            <span className="text-[#44576c] text-[14px]">&#62;</span>
                                        </td>
                                        <td className="bg-[#202b3d] text-[14px] p-[2px_8px_2px_0] leading-[24px]">
                                            {typeof result.output === 'object' ? '[' + String(result.output) + ']' : String(result.output)}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="bg-[#202b3d] text-[#44576c] w-[160px] text-[14px] p-[2px_8px] leading-[24px]" align="right">
                                            실행 결과&nbsp;
                                            <span className="text-[#44576c] text-[14px]">&#62;</span>
                                        </td>
                                        <td
                                            className={classNames(
                                                'bg-[#202b3d] text-[14px] p-[2px_8px_2px_0] leading-[24px]',
                                                answer ? 'text-[#0078ff]' : 'text-[#d32f2f]'
                                            )}
                                        >
                                            {results[index] === null ? (
                                                <Spinner />
                                            ) : answer ? (
                                                '테스트를 통과하였습니다.'
                                            ) : (
                                                `실행한 결과 값 ${results[index]}이 기댓값 ${result.output}과 다릅니다.`
                                            )}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        );
                    })}
                    {Object.keys(results).every((result) => results[Number(result)] !== null) && (
                        <React.Fragment>
                            <div className="text-[#98a8b9] text-[12.25px] m-[24px_0_8px_0]">테스트 결과 (~˘▾˘)~</div>
                            <div
                                className={classNames(
                                    'text-[16px] font-[500] m-[4px_0_24px_0]',
                                    answerNum === Object.keys(results).length ? 'text-[#0078ff]' : 'text-[#d32f2f]'
                                )}
                            >
                                {Object.keys(results).length}개 중 {answerNum}개 성공
                            </div>
                            {answerNum === Object.keys(results).length && (
                                <div className="text-[#5f7f90] text-[12.25px] m-[4px_0] leading-5">
                                    샘플 테스트 케이스를 통과했다는 의미로, 작성한 코드가 문제의 정답은 아닐 수 있습니다. <br /> (샘플 테스트 케이스는 [테스트
                                    케이스 추가하기] 버튼을 통해 확인하실 수 있습니다.)
                                </div>
                            )}
                        </React.Fragment>
                    )}
                </React.Fragment>
            )}
        </React.Fragment>
    );
};
