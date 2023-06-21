import { useState, useEffect, useCallback } from 'react';
import { getSolutions, patchLike, patchUnLike } from '@/apis/api';
import { useQuery, useMutation } from 'react-query';
import { useParams } from 'react-router-dom';
import { emailAtom } from '@/atoms/user';
import { useAtomValue } from 'jotai';
import { Navbar } from '../Coding/components';
import { Header, CodeItem } from './components';
import Pagination from '@/components/Pagination';

export type SolutionProps = {
    isAlreadyLike: boolean;
    userEmail: string;
    userName: string;
    likeCount: number;
    userCode: string;
};
export default function Solution() {
    const params = useParams();
    const { data, refetch } = useQuery(['solution', params.questionId], () => getSolutions(params.questionId as string));
    const [value, setValue] = useState(true);
    const [datas, setDatas] = useState<SolutionProps[]>(data.solutions);
    const email = useAtomValue(emailAtom);
    const { mutate } = useMutation(patchLike, {
        onSuccess: () => {
            refetch();
        }
    });
    const { mutate: patchUnLikeMutate } = useMutation(patchUnLike, {
        onSuccess: () => {
            refetch();
        }
    });

    const onSetPage = useCallback(
        (idx: number) => {
            setDatas([]);
            for (let index = idx * 20; index < (idx + 1) * 20; index++) {
                if (!data.solutions[index]) return;
                setDatas((prev) => {
                    return [...prev, data.solutions[index]];
                });
            }
        },
        [data.solutions]
    );

    const onLike = (userEmail: string) => {
        mutate({ questionId: params.questionId as string, userEmail: userEmail });
    };
    const onUnLike = (userEmail: string) => {
        patchUnLikeMutate({ questionId: params.questionId as string, userEmail: userEmail });
    };

    useEffect(() => {
        setDatas(data.solutions);
        onSetPage(0);
    }, [data, onSetPage]);

    return (
        <div className="min-h-[calc(100vh-50px-394px-80px)] tracking-wider">
            <Navbar title={data.questionInfo.title} category={data.questionInfo.category} id={data.questionInfo.questionId} children="다른 사람의 풀이" />
            <div className="max-w-[1200px] px-[16px] mx-auto">
                <Header value={value} setValue={setValue} />
                {datas.map((solution: SolutionProps, index: number) => {
                    return value ? (
                        <CodeItem key={index} solution={solution} onLike={(value) => (!solution.isAlreadyLike ? onLike(value) : onUnLike(value))} />
                    ) : (
                        solution.userEmail === email && <CodeItem key={index} solution={solution} onLike={(value) => onLike(value)} />
                    );
                })}
            </div>
            <div className="flex justify-center items-center my-[40px] gap-[9px]">
                <Pagination onClickPage={onSetPage} totalNum={data.solutions.length} />
            </div>
        </div>
    );
}
