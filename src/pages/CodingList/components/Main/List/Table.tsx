import check from '@assets/images/codingList/check.svg';
import { useAtomValue } from 'jotai';
import { useEffect, useMemo, useState } from 'react';
import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Sort from './Sort';
import Pagination from '@/components/Pagination';
import { filterAtom } from '@/pages/CodingList/atoms';

type filteredData = {
    category: string;
    correct_rate: number;
    difficulty: string;
    finished_count: number;
    isComplete: boolean;
    question_id: string;
    title: string;
}[];

export default function Table() {
    const queryClinet = useQueryClient();
    const listData = queryClinet.getQueryData<TListData>(['questions']);
    const navigate = useNavigate();
    const filters = useAtomValue(filterAtom);

    const filteredData = useMemo(() => {
        const levelFilter = filters.filter((f) => ['LV.1', 'LV.2', 'LV.3'].includes(f));
        const testFilter = filters.filter((f) => !['LV.1', 'LV.2', 'LV.3'].includes(f));

        const level = listData?.questions.filter((q) => {
            if (filters.length === 0) return true;
            const condi1 = levelFilter.length === 0 || levelFilter.includes(`LV.${q.difficulty}`);
            const condi2 = testFilter.length === 0 || testFilter.includes(q.category);
            return condi1 && condi2;
        });

        return level;
    }, [listData, filters]);

    const [page, setPage] = useState<filteredData>([]);

    const onClick = (idx: number) => {
        if (!filteredData) return;
        setPage([]);
        for (let index = idx * 20; index < (idx + 1) * 20; index++) {
            if (!filteredData[index]) return;
            setPage((prev) => {
                return [...prev, filteredData[index]];
            });
        }
    };

    useEffect(() => {
        setPage([]);
        if (!filteredData) return;
        for (let index = 0; index < 20; index++) {
            if (!filteredData[index]) return;
            setPage((prev) => {
                return [...prev, filteredData[index]];
            });
        }
    }, [filteredData]);

    return (
        <>
            <div className="flex justify-between">
                <div className="font-extrabold">{filteredData?.length + '문제'}</div>
                <Sort />
            </div>
            <div className="border border-list_border rounded-md mt-[1rem]">
                <table className=" w-full bg-white rounded-md ">
                    <thead className="">
                        <tr className="text-[0.75rem] text-[#98A8B9] p-[0.5625rem] border-b border-list_border">
                            <th className="w-[3.75rem] text-center p-[0.5625rem]">상태</th>
                            <th className="text-center p-[0.5625rem]">제목</th>
                            <th className="w-[5rem] text-center p-[0.5625rem]">난이도</th>
                            <th className="w-[6.25rem] text-right p-[0.5625rem]">완료한 사람</th>
                            <th className="w-[5rem] text-right p-[0.5625rem]">정답률</th>
                        </tr>
                    </thead>
                    <tbody>
                        {page?.map((el: any, i: number) => {
                            return (
                                <tr key={i} className="items-center border-b border-list_border p-[0.5625rem] ">
                                    <td className="text-center w-[3.75rem] p-[0.5625rem] flex justify-center items-center mt-2">
                                        {el.isComplete ? <img className="w-4" src={check} /> : null}
                                    </td>
                                    <td className="px-[0.5625rem] py-[0.75rem]">
                                        <div className="w-fit cursor-pointer" onClick={() => navigate(`/learn/courses/${el.question_id}`)}>
                                            {el.title}
                                        </div>
                                        <div className="mt-[0.0625rem] text-[0.75rem] overflow-hidden text-[#7890A0]">{el.category}</div>
                                    </td>
                                    <td
                                        className="text-center font-bold w-[5rem] p-[0.5625rem] text-[0.875rem]"
                                        style={{
                                            color:
                                                el.difficulty === '0'
                                                    ? '#2189FF'
                                                    : el.difficulty === '1'
                                                    ? '#1BBAFF'
                                                    : el.difficulty === '2'
                                                    ? '#47C84C'
                                                    : el.difficulty === '3'
                                                    ? '#FFA800'
                                                    : '#2189FF'
                                        }}
                                    >
                                        Lv.{el.difficulty}
                                    </td>
                                    <td className="text-right w-[6.25rem] p-[0.5625rem] text-[0.875rem] pr-3">{el.finished_count}명</td>
                                    <td className="text-right w-[5rem] p-[0.5625rem] text-[0.875rem] pr-3">{el.correct_rate * 100}%</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center itmes-center gap-[0.5625rem] mt-[5rem] pb-[12.825rem]">
                <Pagination onClickPage={onClick} totalNum={filteredData!.length} />
            </div>
        </>
    );
}
