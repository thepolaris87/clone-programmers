import { getQuestions } from '@/apis/api';
import check from '@assets/images/codingList/check.svg'
import { useQuery } from 'react-query';

export default function Table() {
    const { data } = useQuery(['questions'], () => getQuestions());
    const questions = data.questions;

    return (
        <table className=" w-full ">
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
                {questions.map((el: any, i : number) => {
                <tr key={i} className="items-center border-b border-list_border p-[0.5625rem]">
                    <td className="text-center">{(el.isComplete) ? check : null}</td>
                    <td>{el.title}</td>
                    <td className="text-center text-[#2189FF] font-bold">Lv.{el.difficulty}</td>
                    <td className="text-right">{el.finished_count}명</td>
                    <td className="text-right">{el.correct_rate}%</td>
                </tr>
                })}
            </tbody>
        </table>
    );
}
