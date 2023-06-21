import React from 'react';

type InputProps = {
    onClick: () => void;
    value: string;
    setValue: (value: string) => void;
};
export const Input = ({ onClick, value, setValue }: InputProps) => {
    return (
        <React.Fragment>
            <div className="m-[40px_0_8px_0]">
                <h5 className="text-[16px] font-[700]">답변 쓰기</h5>
            </div>
            <div className="mb-[8px]">
                <textarea
                    value={value}
                    required={true}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="답변을 입력하세요."
                    className="w-[100%] h-[200px] p-[8px_12px] text-[16px] border-[1px] border-[#d7e2eb] bg-[#fbfbfd] rounded-[4px] placeholder:text-[rgba(50,50,80,0.24)] focus:bg-[white]"
                />
                <h5 className="text-[14px]">
                    이 입력폼은 마크다운 문법을 지원합니다.
                    <a
                        className="text-[#0078ff]"
                        href="https://qna.programmers.co.kr/questions/1772/%EB%A7%88%ED%81%AC%EB%8B%A4%EC%9A%B4-%EB%AC%B8%EB%B2%95-%EC%9E%91%EC%84%B1-%ED%8C%81"
                    >
                        &nbsp;마크다운 가이드&nbsp;
                    </a>
                    를 참고하세요.
                </h5>
                <button
                    className="mt-[20px] bg-[#0078ff] text-[14px] md:text-[16px] font-[500] p-[5px_13px] md:p-[7px_13px] hover:bg-[#0053f4] rounded-[4px]"
                    onClick={onClick}
                >
                    <h5 className="mt-0.5 text-[white]">작성하기</h5>
                </button>
            </div>
        </React.Fragment>
    );
};
