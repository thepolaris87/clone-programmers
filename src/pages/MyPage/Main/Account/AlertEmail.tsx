import { useState } from 'react';
import { ContentContainer, ContentSubTitle, Toggle } from '../../MyPage.styles';
import { useSetAtom } from 'jotai';
import { toastAtom } from '@/atoms/toast';

export default function AlertEmail() {
    const setMessage = useSetAtom(toastAtom);
    const [checked, setChecked] = useState({ email: false, marketing: false });

    const onChange = (e: React.FormEvent<HTMLLabelElement>, type: 'email' | 'marketing') => {
        const { target } = e;
        if (target instanceof HTMLInputElement) setChecked({ ...checked, [type]: target.checked });
        setMessage({ message: '변경사항이 저장 되었습니다.' });
    };

    return (
        <>
            <ContentSubTitle>이메일 알림</ContentSubTitle>
            <ContentContainer className="mb-8 items-center">
                <div className="flex items-center">
                    <div className="flex-1">
                        <div>알림</div>
                        <div>내 질문의 답변이 등록되면 이메일로 알림을 받겠습니다.</div>
                    </div>
                    <div>
                        <Toggle checked={checked.email} onChange={(e) => onChange(e, 'email')} />
                    </div>
                </div>
                <hr className="my-7" />
                <div className="flex items-center">
                    <div className="flex-1">
                        <div>마케팅 활용 동의 및 광고 수신 동의</div>
                        <div>각종 이벤트, 회원 혜택, 할인 행사등 마케팅 알림을 받겠습니다.</div>
                    </div>
                    <div>
                        <Toggle checked={checked.marketing} onChange={(e) => onChange(e, 'marketing')} />
                    </div>
                </div>
            </ContentContainer>
        </>
    );
}
