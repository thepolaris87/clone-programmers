import { useSetAtom } from 'jotai';
import { ContentButtonV1, ContentContainer, ContentSubTitle } from '../../MyPage.styles';
import { modal } from '../../atoms';

export default function Password() {
    const setModalMessage = useSetAtom(modal);
    const onPasswordChangeClick = () => setModalMessage({ message: '패스워드 변경 준비 중입니다.' });

    return (
        <>
            <ContentSubTitle>비밀번호</ContentSubTitle>
            <ContentContainer className="flex mb-8 items-center">
                <div className="flex-1">
                    <div className="text-[#606060] text-[13px] font-medium">최근 업데이트 : 2023-06-05</div>
                    <div className="text-[#424242] text-[15px] font-medium">비밀번호</div>
                </div>
                <ContentButtonV1 onClick={onPasswordChangeClick}>비밀번호 변경</ContentButtonV1>
            </ContentContainer>
        </>
    );
}
