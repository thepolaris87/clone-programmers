import { ContentButtonV1, ContentButtonV3, ContentContainer, ContentSubTitle } from '../../MyPage.styles';
import facebookIconSrc from '@assets/images/signin/facebook.png';
import githubIconSrc from '@assets/images/signin/github.png';
import googleIconSrc from '@assets/images/signin/google.png';
import kakaoIconSrc from '@assets/images/signin/kakao.png';
import { useState } from 'react';

const Connection = ({
    isConnect,
    ...rest
}: { isConnect?: boolean } & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
    if (isConnect)
        return (
            <>
                <span className="text-[#ababab] font-medium text-sm mr-3 mt-1">연결됨</span>
                <ContentButtonV1 {...rest}>연결해제</ContentButtonV1>
            </>
        );
    else return <ContentButtonV3 {...rest}>연결하기</ContentButtonV3>;
};

export default function Link() {
    const [connect, setConnect] = useState({ facebook: false, github: false, google: false, kakao: true });
    const onConnectClick = (type: 'facebook' | 'github' | 'google' | 'kakao') => {
        setConnect({ ...connect, [type]: !connect[type] });
    };

    return (
        <>
            <ContentSubTitle>계정 연동</ContentSubTitle>
            <ContentContainer className="mb-8">
                <div className="flex items-center pb-4">
                    <img className="w-14 h-14" src={facebookIconSrc} />
                    <span className="flex-1 text-[#424242] font-medium ml-6">Facebook</span>
                    <Connection isConnect={connect.facebook} onClick={() => onConnectClick('facebook')} />
                </div>
                <hr />
                <div className="flex items-center py-4">
                    <img className="w-14 h-14" src={githubIconSrc} />
                    <span className="flex-1 text-[#424242] font-medium ml-6">Github</span>
                    <Connection isConnect={connect.github} onClick={() => onConnectClick('github')} />
                </div>
                <hr />
                <div className="flex items-center py-4">
                    <img className="w-14 h-14" src={googleIconSrc} />
                    <span className="flex-1 text-[#424242] font-medium ml-6">Google</span>
                    <Connection isConnect={connect.google} onClick={() => onConnectClick('google')} />
                </div>
                <hr />
                <div className="flex items-center pt-4">
                    <img className="w-14 h-14" src={kakaoIconSrc} />
                    <span className="flex-1 text-[#424242] font-medium ml-6">Kakao</span>
                    <Connection isConnect={connect.kakao} onClick={() => onConnectClick('kakao')} />
                </div>
            </ContentContainer>
        </>
    );
}
