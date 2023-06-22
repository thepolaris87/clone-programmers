import React from 'react';
import classNames from 'classnames';
import { ResultProps } from '../CodingTest';

type TestModalContentProps = {
    onClick: (value: boolean) => void;
    testCase: ResultProps[];
    userTestCase: ResultProps[];
    onAddUserTestCase: () => void;
    onDeleteUserTestCase: (value: number) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
};
export const TestModalContent = ({ onClick, testCase, userTestCase, onAddUserTestCase, onDeleteUserTestCase, onChange }: TestModalContentProps) => {
    return (
        <React.Fragment>
            <div className="flex pb-[40px]">
                <div className="w-[70%]">
                    <div className="flex justify-between p-[8px] bg-[#fbfbfd] text-[#263747] border-[1px] border-[#d7e2eb] rounded-[4px_0_0_0]">
                        <div className="text-[16px] leading-[1.6]">Parameters</div>
                        <button className="ml-[8px] bg-[#0078ff] text-[white] text-[12px] p-[2px_6px] rounded-[4px]" onClick={() => onAddUserTestCase()}>
                            <h5 className="mt-0.5 font-[400]">+ 추가</h5>
                        </button>
                    </div>
                    <div className="overflow-x-scroll overflow-y-visible p-[16px] border-[#d7e2eb] border-[1px] border-t-0">
                        <div className="mb-[16px] pb-[16px]">
                            {testCase.map((tc, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={classNames(
                                            (index !== testCase.length - 1 || userTestCase) && 'border-[#d7e2eb] border-b-[1px] border-dashed',
                                            'py-[8px] px-[8px] flex'
                                        )}
                                    >
                                        <input
                                            className="w-[100%] h-[40px] bg-[#e9ecf3] text-[#5f7f90] opacity-1 rounded-[4px] p-[16px] border-[1px] border-[#D7E2EB]"
                                            value={typeof tc.input[0] === 'object' ? '[' + String(tc.input[0]) + ']' : String(tc.input[0])}
                                            onChange={() => console.log(1)}
                                            disabled={true}
                                        ></input>
                                        {tc.input[1] && (
                                            <input
                                                className="w-[100%] h-[40px] bg-[#e9ecf3] text-[#5f7f90] opacity-1 rounded-[4px] p-[16px] border-[1px] border-[#D7E2EB] ml-5"
                                                value={typeof tc.input[1] === 'object' ? '[' + String(tc.input[1]) + ']' : String(tc.input[1])}
                                                onChange={() => console.log(1)}
                                                disabled={true}
                                            ></input>
                                        )}
                                    </div>
                                );
                            })}
                            {userTestCase &&
                                userTestCase.map((utc, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={classNames(
                                                index !== userTestCase.length - 1 && 'border-[#d7e2eb] border-b-[1px] border-dashed',
                                                'py-[8px] px-[8px]'
                                            )}
                                        >
                                            <input
                                                name="input"
                                                className="w-[100%] h-[40px] bg-[#fbfbfd] text-[#263747] opacity-1 rounded-[4px] p-[16px] border-[1px] border-[#D7E2EB]"
                                                value={typeof utc.input === 'object' ? '[' + String(utc.input) + ']' : String(utc.input)}
                                                onChange={(e) => onChange(e, index)}
                                                placeholder="Input"
                                            ></input>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>
                <div className="w-[30%]">
                    <div className="bg-[#fbfbfd] text-[#263747] border-[1px] border-[#d7e2eb] border-l-0 p-[8px_16px] rounded-[0_4px_0_0]">
                        <h5 className="mt-0.5">Return</h5>
                    </div>
                    <div className="overflow-x-scroll overflow-y-visible p-[16px] border-[#d7e2eb] border-[1px] border-t-0 border-l-0">
                        <div className="mb-[16px] pb-[16px]">
                            {testCase.map((tc, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={classNames(
                                            (index !== testCase.length - 1 || userTestCase) && 'border-[#d7e2eb] border-b-[1px] border-dashed',
                                            'p-[8px]'
                                        )}
                                    >
                                        <input
                                            className="w-[100%] h-[40px] bg-[#e9ecf3] text-[#5f7f90] opacity-1 rounded-[4px] p-[16px] border-[1px] border-[#D7E2EB]"
                                            value={typeof tc.output === 'object' ? '[' + String(tc.output) + ']' : String(tc.output)}
                                            onChange={(e) => console.log(e)}
                                            disabled={true}
                                        ></input>
                                    </div>
                                );
                            })}
                            {userTestCase &&
                                userTestCase.map((utc, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={classNames(
                                                index !== userTestCase.length - 1 && 'border-[#d7e2eb] border-b-[1px] border-dashed',
                                                'flex justify-between p-[8px]'
                                            )}
                                        >
                                            <input
                                                name="output"
                                                className="w-[90%] h-[40px] bg-[#fbfbfd] text-[#263747] opacity-1 rounded-[4px] p-[16px] border-[1px] border-[#D7E2EB]"
                                                value={typeof utc.output === 'object' ? '[' + String(utc.output) + ']' : String(utc.output)}
                                                onChange={(e) => onChange(e, index)}
                                                placeholder="Output"
                                            ></input>
                                            <button
                                                className="float-right text-[24px] opacity-[0.16] leading-1 font-[700] hover:text-[red] hover:opacity-[0.8]"
                                                onClick={() => onDeleteUserTestCase(index)}
                                            >
                                                x
                                            </button>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-[40px] flex flex-wrap justify-end">
                <button
                    className="bg-[#0078ff] text-[white] text-[14px] sm:text-[16px] font-[500] leading-[24px] p-[7px_13px] mx-[4px] rounded-[4px]"
                    onClick={() => onClick(false)}
                >
                    <h5 className="mt-0.5">확인</h5>
                </button>
            </div>
        </React.Fragment>
    );
};
