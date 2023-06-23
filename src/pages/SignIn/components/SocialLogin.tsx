import React from 'react';
import kakao from '@assets/images/signin/kakao.png';
import google from '../../../assets/images/signin/google.png';
import github from '../../../assets/images/signin/github.png';
import facebook from '../../../assets/images/signin/facebook.png';
import { useSetAtom } from 'jotai';
import { toastAtom } from '@/atoms/toast';

export default function SocialLogin() {
    const setMessage = useSetAtom(toastAtom);
    const onSocialClick = () => {
        setMessage({ message: '소셜 로그인 준비중입니다.' });
    };

    return (
        <>
            <div className="text-center mb-[1.5rem]"> 다른 계정으로 로그인 하기</div>
            <div className="flex justify-evenly text-center text-[0.75rem]">
                <div>
                    <img src={google} className="w-[2.875rem] cursor-pointer" onClick={onSocialClick}></img>
                    <div>Google</div>
                </div>
                <div>
                    <img src={kakao} className="w-[2.875rem] cursor-pointer" onClick={onSocialClick}></img>
                    <div>Kakao</div>
                </div>
                <div>
                    <img src={github} className="w-[2.875rem] cursor-pointer" onClick={onSocialClick}></img>
                    <div>Github</div>
                </div>
                <div>
                    <img src={facebook} className="w-[2.875rem] cursor-pointer" onClick={onSocialClick}></img>
                    <div>Facebook</div>
                </div>
            </div>
        </>
    );
}
