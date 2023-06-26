import { toastAtom } from '@/atoms/toast';
import { emailAtom, nameAtom } from '@/atoms/user';
import userProfile from '@assets/images/codingList/profile.jpeg';
import axios from 'axios';
import { useAtomValue, useSetAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

export default function Modal() {
    const name = useAtomValue(nameAtom);
    const navigate = useNavigate();
    const setEmail = useSetAtom(emailAtom);
    const setName = useSetAtom(nameAtom);
    const onLogout = () => {
        axios.defaults.headers.common.Authorization = null;
        setEmail('');
        setName('');
        window.localStorage.setItem('token', '');
    };

    const setMessage = useSetAtom(toastAtom);
    const toastMessage = () => {
        setMessage({ message: '준비 중입니다.' });
    };

    return (
        <div className="absolute w-full sm:w-[334px] top-[3.2rem] right-2 bg-white sm:shadow-xl rounded-2xl">
            <div className="flex h-[60px] items-center px-[34px] border-b border-[#DCDCDC]">
                <div className="font-bold text-[14px]">내 프로필</div>
            </div>
            <div className="bg-[#f6faff] flex flex-col items-center gap-4">
                <div className="w-[85px] h-[85px] pt-[25px] mb-[15px] ">
                    <img className="rounded-full" src={userProfile} />
                </div>
                <div className="text-[18px] font-bold px-[20px] leading-[24px] break-all mb-7">{name}</div>
                <div
                    className="w-[245px] p-[12px] rounded mb-[30px] border border-[#d7e2db] text-center text-[14px] bg-white cursor-pointer select-none"
                    onClick={toastMessage}
                >
                    프로필 등록하기
                </div>
            </div>
            <div className="flex flex-col self-center bg-center">
                <div
                    className="h-[84px] text-[18px] font-semibold leading-[24px] mx-[20px] justify-center border-t border-[#efefef] cursor-pointer pt-7"
                    onClick={onLogout}
                >
                    로그아웃
                </div>
            </div>
        </div>
    );
}
