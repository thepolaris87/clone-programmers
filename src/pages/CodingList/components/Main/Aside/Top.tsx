import { nameAtom } from '@/atoms/user';
import { useAtomValue } from 'jotai';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';

export default function Top() {
    const navigate = useNavigate();
    const name = useAtomValue(nameAtom);
    const queryClinet = useQueryClient();
    const listData = queryClinet.getQueryData<TListData>(['questions']);
    const list = listData?.questions;

    const countSuccess = (object: any, property: any, value: any) => {
        let count = 0;
        if(!object) return;
        for (let i = 0; i < object.length; i++) {
            if (object[i][property] === value) {
                count++;
            }
        }
        return count;
    };

    const CompleteCount = countSuccess(list, 'isComplete', true);

    return (
        <>
            {name ? (
                <div className="p-[1.5rem] border-b border-list_border">
                    <div className="text-[#2189FF] text-[1.125rem] font-extrabold">{name}</div>
                    <ul className="flex w-full my-[0.75rem] text-[0.875rem]">
                        <li className="w-1/3">
                            <div className="text-[#98A8B9]">해결한 문제</div>
                            <div className="font-extrabold text-[0.875rem]">{CompleteCount}개</div>
                        </li>
                    </ul>
                </div>
            ) : (
                <div className="border-b border-list_border text-center items-center py-[2rem]">
                    <div className="font-extrabold text-[1rem]">로그인하고 코딩테스트 연습을 시작하세요!</div>
                    <div className="flex justify-center items-center">
                        <div
                            className=" bg-btn_blue w-[6.25rem] h-[2.875rem] text-center text-white font-extrabold rounded-md mt-[1rem] pt-3 cursor-pointer"
                            onClick={() => navigate('/sign-in')}
                        >
                            로그인
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
