import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { emailAtom } from '@/atoms/user';
import { useAtomValue } from 'jotai';
import { getDetailQuestion, postComment, deleteComment, deleteQuestion } from '@/apis/api';
import TopNavBar from '../CodingList/components/TopNavBar';
import { Navbar } from '@/components/Navbar';
import { NavLink, Header, Detail, Comments, Input } from './components';

export type CommentProps = {
    date: string;
    description: string;
    idx: number;
    userEmail: string;
    userName: string;
};
export default function Question() {
    const navigate = useNavigate();
    const params = useParams();
    const { data, refetch } = useQuery(['detailQue', params.questionId], () => getDetailQuestion(params.questionId as string));
    const [value, setValue] = useState('');
    const email = useAtomValue(emailAtom);

    const { mutate: postCommentMutate } = useMutation(postComment, {
        onSuccess: () => {
            refetch();
        }
    });
    const { mutate: delCommentMutate } = useMutation(deleteComment, {
        onSuccess: () => {
            refetch();
        }
    });
    const { mutate: delQuestionMutate } = useMutation(deleteQuestion, {
        onSuccess: () => {
            navigate(`/learn/courses/${data.question.id}/questions`);
        }
    });

    const onClick = () => {
        setValue('');
        if (params.questionId) postCommentMutate({ questionId: params.questionId, description: value });
    };

    return (
        <React.Fragment>
            <TopNavBar />
            <Navbar />
            <div className="box-border border-b border-slate-100 " />
            <NavLink question={data.question} />
            <div className="h-[calc(100vh-50px-394px)]">
                <div className="p-[24px_0_40px_0] border-b-[1px] border-[#d7e2eb]">
                    <div className="max-w-[1200px] px-[16px] m-[0_auto_0_auto]">
                        <Header
                            email={email}
                            userEmail={data.question.userEmail}
                            delQuestionMutate={delQuestionMutate}
                            questionId={params.questionId as string}
                            id={data.question.id}
                        />
                        <Detail question={data.question} />
                    </div>
                </div>
                <div className="p-[24px_0_40px_0]">
                    <div className="max-w-[1200px] m-[0_auto_0_auto] px-[16px]">
                        <Comments comments={data.comments} email={email} delCommentMutate={delCommentMutate} />
                        <Input onClick={onClick} value={value} setValue={setValue} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
