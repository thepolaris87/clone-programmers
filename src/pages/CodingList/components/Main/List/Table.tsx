import check from '@assets/images/codingList/check.svg';
import { useAtomValue } from 'jotai';
import { useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Sort from './Sort';
import Pagination from '@/components/Pagination';
import { filterAtom, sortAtom } from '@/pages/CodingList/atoms';
import { getChallenges } from '@/apis/api';

type filteredData = {
    category: string;
    correct_rate: number;
    difficulty: string;
    finished_count: number;
    isComplete: boolean;
    question_id: string;
    title: string;
};

export default function Table() {
    const data = useQuery(['questions'], getChallenges);

    const listData = data.data;
    const navigate = useNavigate();
    const filters = useAtomValue(filterAtom);
    const sort = useAtomValue(sortAtom);

    const filteredData = useMemo(() => {
        const levelFilter = filters.filter((f) => ['LV.1', 'LV.2', 'LV.3'].includes(f));
        const testFilter = filters.filter((f) => !['LV.1', 'LV.2', 'LV.3'].includes(f));

        const level = listData?.questions.filter((q: filteredData) => {
            if (filters.length === 0) return true;
            const condi1 = levelFilter.length === 0 || levelFilter.includes(`LV.${q.difficulty}`);
            const condi2 = testFilter.length === 0 || testFilter.includes(q.category);
            return condi1 && condi2;
        });

        return level;
    }, [listData, filters]);

    const [page, setPage] = useState<filteredData[]>([]);

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
        if (sort === '제목순') {
            filteredData?.sort((a: { title: string }, b: { title: string }) => a.title.localeCompare(b.title));
        } else if (sort === '정답률 높은 문제') {
            filteredData?.sort((a: { correct_rate: number }, b: { correct_rate: number }) => b.correct_rate - a.correct_rate);
        } else if (sort === '정답률 낮은 문제') {
            filteredData?.sort((a: { correct_rate: number }, b: { correct_rate: number }) => a.correct_rate - b.correct_rate);
        }

        setPage([]);
        if (!filteredData) return;
        for (let index = 0; index < 20; index++) {
            if (!filteredData[index]) return;
            setPage((prev) => {
                return [...prev, filteredData[index]];
            });
        }
    }, [filteredData, sort]);

    return (
        <>
            <div className="flex justify-between">
                <div className="font-[NotoSansKRBold]">{filteredData?.length + '문제'}</div>
                <Sort />
            </div>
            <div className="border border-list_border rounded-md mt-[1rem]">
                <table className=" w-full bg-white rounded-md ">
                    <thead className="">
                        <tr className="text-[0.75rem] text-[#98A8B9] p-[0.5625rem] border-b border-list_border">
                            <th className="w-[3.75rem] text-center p-[0.5625rem] font-[NotoSansKRBold]">상태</th>
                            <th className="text-center p-[0.5625rem] font-[NotoSansKRBold]">제목</th>
                            <th className="w-[5rem] text-center p-[0.5625rem] font-[NotoSansKRBold]">난이도</th>
                            <th className="w-[6.25rem] text-right p-[0.5625rem] font-[NotoSansKRBold]">완료한 사람</th>
                            <th className="w-[5rem] text-right p-[0.5625rem] font-[NotoSansKRBold]">정답률</th>
                        </tr>
                    </thead>
                    <tbody>
                        {page?.map((el: filteredData, i: number) => {
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
                                        className="text-center font-[NotoSansKRBold] w-[5rem] p-[0.5625rem] text-[0.875rem]"
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
                <Pagination onClickPage={onClick} totalNum={filteredData ? filteredData.length : 0} />
            </div>
        </>
    );
}
