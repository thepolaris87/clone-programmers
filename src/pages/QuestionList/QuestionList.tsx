import React, { useState, useEffect, useCallback } from 'react';
import { useQuery } from 'react-query';
import { getQuestionList } from '@/apis/api';
import { Navbar } from '../Coding/components/Navbar';
import { Modal } from '@/components/Modal';
import { useNavigate, useParams } from 'react-router-dom';
import { ModalContent, List } from './components';
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

    const onSetPage = useCallback(
        (idx: number) => {
            setDatas([]);
            for (let index = idx * 10; index < (idx + 1) * 10; index++) {
                if (!data.questions[index]) return;
                setDatas((prev) => {
                    return [...prev, data.questions[index]];
                });
            }
        },
        [data.questions]
    );

    useEffect(() => {
        onSetPage(0);
    }, [onSetPage]);

    return (
        <div className="tracking-wider">
            <Navbar title={data.title} category={data.category} id={data.questionId} children="질문 목록" />
            <div className="min-h-[calc(100vh-50px-394px-80px)]">
                <div className="max-w-[1200px] px-[16px] mx-auto">
                    <div className="mt-[40px]">
                        <button
                            className="w-[147px] bg-[#EEEBFF] border-[#EEEBFF] border-[1px] rounded-[4px] text-[#0078FF] text-[16px] font-[600] mb-[24px] p-[7px] hover:bg-[#D8DDFF]"
                            onClick={() => navigate(`/learn/courses/${data.questionId}`)}
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
                            {datas.map((question: questionProps) => {
                                return <List key={question.idx} question={question} />;
                            })}
                            <div className="mt-[40px]">
                                <Pagination onClickPage={onSetPage} totalNum={data.questions.length} number={10} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal title="질문하기" width="992px" open={modal} onClick={setModal}>
                <ModalContent onClick={setModal} content={data.userCode} questionId={params.questionId as string} status={data?.status} />
            </Modal>
        </div>
    );
}
