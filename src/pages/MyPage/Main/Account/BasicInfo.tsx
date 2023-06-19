import { useAtom, useSetAtom } from 'jotai';
import { ContentButtonV2, ContentContainer, ContentSubTitle } from '../../MyPage.styles';
import { modal, userInfo } from '../../atoms';

export default function BasicInfo() {
    const [user] = useAtom(userInfo);
    const setModalMessage = useSetAtom(modal);

    const onModifyClick = () => {
        setModalMessage({ message: '개인저보 수정 준비 중입니다.' });
    };

    return (
        <>
            <ContentSubTitle>기본정보</ContentSubTitle>
            <ContentContainer className="mb-8">
                <div className="text-center text-[#263747] text-[22px] font-medium">{user?.userName}</div>
                <div className="text-center text-[#44576c] my-3">{user?.userEmail}</div>
                <div className="text-end">
                    <ContentButtonV2 onClick={onModifyClick}>수정</ContentButtonV2>
                </div>
            </ContentContainer>
        </>
    );
}
