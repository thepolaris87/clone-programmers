import { listDataAtom } from '@/atoms/user';
import check from '@assets/images/codingList/check.svg';
import { useAtomValue } from 'jotai';
import { useNavigate } from 'react-router-dom';

export default function Table() {
    const listData = useAtomValue(listDataAtom);
    const navigate = useNavigate();

    return (
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
                {listData.map((el: any, i: number) => {
                    return (
                        <tr key={i} className="items-center border-b border-list_border p-[0.5625rem] py-6 ">
                            <td className="text-center w-[3.75rem] p-[0.5625rem] flex justify-center items-center mt-1">
                                {el.isComplete ? <img className="w-4" src={check} /> : null}
                            </td>
                            <td className="p-3" >
                                <div className='w-fit cursor-pointer' onClick={() => navigate(`/questions/${el.question_id}`)} >{el.title}</div></td>
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
                            <td className="text-right w-[5rem] p-[0.5625rem] text-[0.875rem] pr-3">{el.correct_rate}%</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
