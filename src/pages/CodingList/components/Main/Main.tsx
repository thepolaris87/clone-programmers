import Carousel from '../Carousel';
import { listDataAtom, nameAtom, tokenAtom } from '@/atoms/user';
import { useAtomValue, useSetAtom } from 'jotai';
import Aside from './Aside/Aside';
import List from './List/List';
import { useQuery } from 'react-query';
import { getChallenges } from '@/apis/api';
import Pagination from '@/components/Pagination';
import { useEffect, useState } from 'react';

type questionProps = {
    date: string;
    description: string;
    idx: number;
    title: string;
    userEmail: string;
    userName: string;
    commentCount: number;
};
export default function Main() {
    const token = useAtomValue(tokenAtom);
    const name = useAtomValue(nameAtom);
    const { data } = useQuery(['questions'], () => getChallenges());
    const setListData = useSetAtom(listDataAtom);
    setListData(data.questions);

    console.log(data.questions);
    const onClick = () => {
    };

    return (
        <>
            <Carousel />
            <div className="bg-[#F7F8FA]">
                <div className="flex gap-[2rem] pt-[3rem] w-full justify-center box-border ">
                    <div className="flex max-w-[75rem] w-full gap-[2rem]">
                        <div className="w-2/3">
                            <List/>
                            <div className="flex justify-center itmes-center gap-[0.5625rem] mt-[5rem]">
                            <Pagination onClickPage={onClick} totalNum={data.questions.length} />
                            </div>
                        </div>
                        <Aside />
                    </div>
                </div>
            </div>
        </>
    );
}
