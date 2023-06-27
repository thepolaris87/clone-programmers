import React from 'react';
import { Code } from '@/components/Code';
import profile from '@/assets/images/default_profile_img.jpeg';

export const Detail = ({ question }: { question: DetailProps }) => {
    return (
        <React.Fragment>
            <div className="flex justify-between items-center">
                <div className="flex">
                    <img className="w-[44px] h-[44px] rounded-[4px]" src={profile}></img>
                    <div className="ml-[10px]">
                        <h5 className="text-[16px] font-[NotoSansKRBold]">{question.userEmail}</h5>
                        <h5 className="text-[14px] text-[#B2C0CC]">{question.date}</h5>
                    </div>
                </div>
                <button
                    className="hidden bg-[#0078ff] text-[white] text-[14px] md:text-[16px] font-[NotoSansKRMedium] p-[5px_13px] md:p-[7px_13px] sm:block rounded-[4px] hover:bg-[#0053f4]"
                    onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                >
                    <h5 className="mb-0.5">답변 작성</h5>
                </button>
            </div>
            <div className="mt-[16px]">
                <h3 className="text-[26px] font-[NotoSansKRBold] pb-[4px] border-b-[1px] border-[#d7e2eb]">{question.title}</h3>
                <div className="mt-[24px] break-words break-normal">{question.description}</div>
                {question.showUserCode === 'true' && (
                    <div className="mt-[16px]">
                        <h6 className="text-[#98a8b9] text-[14px]">작성중인 코드―solution.js</h6>
                        <div className="h-[400px] p-[20px_24px] bg-[#e9ecf3] rounded-[4px]">
                            <Code content={question.userCode} color="#e9ecf3" />
                        </div>
                    </div>
                )}
            </div>
        </React.Fragment>
    );
};
