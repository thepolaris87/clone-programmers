import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { getQuestionList } from '@/apis/api';
import { Navbar } from '../Coding/components/Navbar';
import { Modal } from '@/components/Modal';
import { useNavigate, useParams } from 'react-router-dom';
import { ModalContent } from './components/ModalContent';
import Pagination from '@/components/Pagination';

type questionProps = {
    date: string;
    description: string;
    idx: number;
    title: string;
    userEmail: string;
    userName: string;
    commentCount: number;
};
export default function QuestionList() {
    const params = useParams();
    const navigate = useNavigate();
    const { data } = useQuery(['questionList', params.questionId], () => getQuestionList(params.questionId as string));
    const [datas, setDatas] = useState<questionProps[]>([]);
    const [modal, setModal] = useState(false);

    const onClick = (idx: number) => {
        setDatas([]);
        for (let index = idx * 10; index < (idx + 1) * 10; index++) {
            if (!data.questions[index]) return;
            setDatas((prev) => {
                return [...prev, data.questions[index]];
            });
        }
    };

    useEffect(() => {
        setDatas([]);
        for (let index = 0; index < 10; index++) {
            if (!data.questions[index]) return;
            setDatas((prev) => {
                return [...prev, data.questions[index]];
            });
        }
    }, [data.questions]);

    return (
        <div className="tracking-wider">
            <Navbar />
            <div className="min-h-[calc(100vh-50px-394px-80px)]">
                <div className="max-w-[1200px] px-[16px] mx-auto">
                    <div className="mt-[40px]">
                        <button
                            className="w-[147px] bg-[#EEEBFF] border-[#EEEBFF] border-[1px] rounded-[4px] text-[#0078FF] text-[16px] font-[600] mb-[24px] p-[7px] hover:bg-[#D8DDFF]"
                            onClick={() => navigate('/learn/courses')}
                        >
                            <h5 className="mt-1">&#60;&nbsp; 강의로 돌아가기</h5>
                        </button>
                        <div className="pb-[16px] border-dashed border-[#d7e2eb] border-b-[1px]">
                            <img
                                className="inline-block w-[44px] h-[44px] bg-[#e9ecf3] rounded-[4px] align-top"
                                src="https://res.cloudinary.com/eightcruz/image/upload/c_lfill,h_44,w_44/default_profile_img2_h16rrd"
                            />
                            <div className="inline-block align-top w-[calc(100%-44px)] pl-[16px] cursor-pointer" onClick={() => setModal(true)}>
                                <h5 className="m-[1px_0_0_1px] leading-[1.6] p-[8px] text-[16px] text-[#b2c0cc] font-[400] border-[1px] border-[#d7e2eb] rounded-[4px] hover:shadow-[0_0_0_2px_#0078FF]">
                                    질문을 작성하세요.
                                </h5>
                            </div>
                        </div>
                        <div className="p-[6px_0_16px_0]">
                            {datas.map((question: questionProps, index: number) => {
                                return (
                                    <div key={index} className="flex py-[10px]">
                                        <img
                                            className="inline-block w-[44px] h-[44px] rounded-[4px] align-top"
                                            src="https://res.cloudinary.com/eightcruz/image/upload/c_lfill,h_44,w_44/default_profile_img2_h16rrd"
                                        />
                                        <div className="w-[calc(100%-44px)] pl-[16px] text-[16px] align-top">
                                            <a
                                                className="block text-[rgb(38, 55, 71)] hover:text-[#0078ff] hover:underline"
                                                href={`/questions/${question.idx}`}
                                            >
                                                {question.title}
                                            </a>
                                            <div className="text-[#98a8b9] text-[14px]">
                                                <div className="inline-flex mr-[16px]">
                                                    <svg viewBox="0 0 24 24" className="w-[16px] h-[16px] fill-[rgb(178,192,204)]">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M17 8c0-2.763-2.238-5-5-5S7 5.237 7 8c0 2.762 2.238 5 5 5s5-2.238 5-5ZM4 18.5V21h16v-2.5c0-3.325-4.662-4-8-4s-8 .675-8 4Z"
                                                        ></path>
                                                    </svg>
                                                    <h5 className="ml-[4px] leading-[1.5]">{question.userName}</h5>
                                                </div>
                                                <div className="inline-flex mr-[16px]">
                                                    <svg viewBox="0 0 24 24" className="w-[16px] h-[16px] fill-[rgb(178,192,204)]">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M7 11v2h2v-2H7Zm4 0v2h2v-2h-2Zm4 0v2h2v-2h-2Zm3-7V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 18a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-1ZM5 18V9h14v9H5Z"
                                                        ></path>
                                                    </svg>
                                                    <h5 className="ml-[4px] leading-[1.5]">{question.date}</h5>
                                                </div>
                                                <div className="inline-flex mr-[16px]">
                                                    <svg viewBox="0 0 24 24" className="w-[16px] h-[16px] fill-[rgb(178,192,204)]">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M20.01 3C21.108 3 22 3.897 22 5.006v9.988A2.003 2.003 0 0 1 20.01 17H18l-5 5v-5H3.99C2.892 17 2 16.103 2 14.994V5.006C2 3.898 2.898 3 3.99 3h16.02ZM9 9H7v2h2V9Zm4 0h-2v2h2V9Zm4 0h-2v2h2V9Z"
                                                        ></path>
                                                    </svg>
                                                    <h5 className="ml-[4px] leading-[1.5]">{question.commentCount}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                            <div className="flex justify-center items-center mt-[40px] gap-[9px]">
                                <Pagination onClickPage={onClick} totalNum={data.questions.length} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal title="질문하기" width="992px" open={modal} onClick={setModal}>
                <ModalContent onClick={setModal} content={data.userCode} />
            </Modal>
        </div>
    );
}
