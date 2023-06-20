import React from 'react';

export const AnswerModalContent = ({ onClick, answer }: { onClick: (value: boolean) => void; answer: boolean }) => {
    return (
        <React.Fragment>
            <h5 className="pb-[40px] text-[#263747]">{!answer && '결과를 확인해 주세요.'}</h5>
            <div className="pt-[40px] flex justify-end">
                <button
                    className="bg-[#0078FF] text-[white] text-[16px] font-[500] leading-[24px] p-[7px_13px] rounded-[4px] hover:bg-[#0053f4]"
                    onClick={() => onClick(false)}
                >
                    <h5 className="mt-0.5">{answer ? '다른 사람의 풀이 보기' : '문제로 돌아가기'}</h5>
                </button>
            </div>
        </React.Fragment>
    );
};
