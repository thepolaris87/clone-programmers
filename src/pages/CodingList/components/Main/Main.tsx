import Carousel from './Carousel';
import { nameAtom, tokenAtom } from '@/atoms/user';
import { useAtomValue, useSetAtom } from 'jotai';
import Aside from './Aside/Aside';
import List from './List/List';
import { useQuery } from 'react-query';
import { getChallenges } from '@/apis/api';
import Pagination from '@/components/Pagination';
import { listDataAtom } from '@/atoms/codingList';
import { useEffect, useState } from 'react';

type challengeProps = {
    isComplete: boolean;
    title: string;
    idifficulty: string;
    finished_count: string;
    userEmail: number;
    correct_rate: number;
};
export default function Main() {
    const token = useAtomValue(tokenAtom);
    const name = useAtomValue(nameAtom);
    const [page, setPage] = useState<challengeProps[]>([])
    const { data } = useQuery(['questions'], () => getChallenges());
    const setListData = useSetAtom(listDataAtom);
    setListData(page);

    const onClick = (idx: number) => {
        setPage([]);
        for (let index = idx * 20; index < (idx + 1) * 20; index++) {
            if (!data.questions[index]) return;
            setPage((prev) => {
                return [...prev, data.questions[index]];
            });
        }
    };

    useEffect(() => {
        setPage([]);
        for (let index = 0; index < 20; index++) {
            if (!data.questions[index]) return;
            setPage((prev) => {
                return [...prev, data.questions[index]];
            });
        }
    }, [data.questions]);


    return (
        <>
            <Carousel />
            <div className="bg-[#F7F8FA] px-[1rem]">
                <div className="flex gap-[2rem] pt-[3rem] w-full justify-center box-border ">
                    <div className="block lg:flex max-w-[75rem] w-full gap-[2rem]">
                    <div className='lg:hidden block'>
                        <Aside />
                        </div>
                        <div className="w-full lg:w-2/3">
                            <List/>
                            <div className="flex justify-center itmes-center gap-[0.5625rem] mt-[5rem]">
                            <Pagination onClickPage={onClick} totalNum={data.questions.length} />
                            </div>
                        </div>
                        <div className='lg:block hidden'>
                        <Aside />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
