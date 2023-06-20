import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { getDetailQuestion, postAnswer } from '@/apis/api';
import TopNavBar from '../CodingList/components/TopNavBar';
import { Navbar } from '@/components/Navbar';
import NavLink from './components/NavLink';
import { Code } from '../QuestionList/components/Code';

type commentProps = {
    date: string;
    description: string;
    idx: number;
    userEmail: string;
    userName: string;
};
export default function Question() {
    const navigate = useNavigate();
    const params = useParams();
    const { data } = useQuery(['detailQue', params.questionId], () => getDetailQuestion(params.questionId as string));
    const { mutate } = useMutation(postAnswer, {
        onSuccess: (data) => {
            console.log(data);
        }
    });
    const [value, setValue] = useState('');
    const onClick = () => {
        if (params.questionId) mutate({ questionId: params.questionId, description: value });
    };

    return (
        <React.Fragment>
            <TopNavBar />
            <Navbar />
            <div className="box-border border-b border-slate-100" />
            <NavLink question={data.question} />
            <div className="h-[calc(100vh-50px-394px)]">
                <div className="p-[24px_0_40px_0] border-b-[1px] border-[#d7e2eb]">
                    <div className="max-w-[1200px] px-[16px] m-[0_auto_0_auto]">
                        <button
                            className="w-[147px] bg-[#EEEBFF] border-[#EEEBFF] border-b-[1px] rounded-[4px] text-[#0078FF] text-[14px] md:text-[16px] font-[600] mb-[32px] p-[5px_9px] md:p-[7px] hover:bg-[#D8DDFF]"
                            onClick={() => navigate('/learn/courses')}
                        >
                            <h5 className="mt-1">&#60;&nbsp; 강의로 돌아가기</h5>
                        </button>
                        <div>
                            <div className="flex justify-between items-center">
                                <div className="flex">
                                    <img
                                        className="w-[44px] h-[44px] rounded-[4px]"
                                        src="https://res.cloudinary.com/eightcruz/image/upload/c_lfill,h_44,w_44/default_profile_img2_h16rrd"
                                    ></img>
                                    <div className="ml-[10px]">
                                        <h5 className="text-[16px] font-[700]">{data.question.userEmail}</h5>
                                        <h5 className="text-[14px] text-[#B2C0CC]">{data.question.date}</h5>
                                    </div>
                                </div>
                                <button
                                    className="bg-[#0078ff] text-[white] text-[14px] md:text-[16px] font-[500] p-[5px_13px] md:p-[7px_13px] rounded-[4px] hover:bg-[#0053f4]"
                                    onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                                >
                                    <h5 className="mt-0.5">답변 작성</h5>
                                </button>
                            </div>
                            <div className="mt-[16px]">
                                <h3 className="text-[26px] font-[700] pb-[4px] border-b-[1px] border-[#d7e2eb]">{data.question.title}</h3>
                                <div className="mt-[24px] break-words break-normal">{data.question.description}</div>
                                {data.question.showUserCode === 'true' && (
                                    <div className="mt-[16px]">
                                        <h6 className="text-[#98a8b9] text-[14px] font-[400]">작성중인 코드―solution.js</h6>
                                        <div className="h-[400px] p-[20px_24px] bg-[#e9ecf3] rounded-[4px]">
                                            <Code content={data.question.userCode} color="#e9ecf3" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-[24px_0_40px_0]">
                    <div className="max-w-[1200px] m-[0_auto_0_auto] px-[16px]">
                        <div className="m-[40px_0_8px_0] flex justify-between items-center">
                            <h5 className="text-[16px] leading-[1.6] font-[700]">{data.comments.length}개의 답변</h5>
                        </div>
                        {data.comments.map((comment: commentProps, idx: number) => {
                            return (
                                <React.Fragment key={idx}>
                                    <div className="flex">
                                        <img
                                            className="w-[44px] h-[44px] rounded-[4px]"
                                            src="https://res.cloudinary.com/eightcruz/image/upload/c_lfill,h_44,w_44/default_profile_img2_h16rrd"
                                        ></img>
                                        <div className="ml-[10px]">
                                            <h5 className="text-[16px] font-[700]">{comment.userEmail}</h5>
                                            <h5 className="text-[14px] text-[#B2C0CC]">{comment.date}</h5>
                                        </div>
                                    </div>
                                    <div className="m-[16px_0_40px_0] text-[16px] break-words break-normal">{comment.description}</div>
                                </React.Fragment>
                            );
                        })}
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
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
