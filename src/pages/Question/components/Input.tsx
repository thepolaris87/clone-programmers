import React from 'react';

export const Input = ({ onClick, value, setValue }: InputProps) => {
    return (
        <React.Fragment>
            <div className="m-[40px_0_8px_0]">
                <h5 className="text-[16px] font-[NotoSansKRBold]">답변 쓰기</h5>
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
                    <span className="text-[#0078ff]">&nbsp;마크다운 가이드&nbsp;</span>를 참고하세요.
                </h5>
                <button
                    className="mt-[20px] bg-[#0078ff] text-[14px] md:text-[16px] font-[NotoSansKRMedium] p-[5px_13px] md:p-[7px_13px] hover:bg-[#0053f4] rounded-[4px]"
                    onClick={onClick}
                >
                    <h5 className="mb-0.5 text-[white]">작성하기</h5>
                </button>
            </div>
        </React.Fragment>
    );
};
