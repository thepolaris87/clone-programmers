import { useSetAtom } from 'jotai';
import { ContentButtonV1, ContentContainer, ContentSubTitle } from '../../MyPage.styles';
import { modal } from '../../atoms';

export default function Delete() {
    const setModalMessage = useSetAtom(modal);
    const onDeleteClick = () => setModalMessage({ message: '계정 삭제 준비 중입니다.' });
    return (
        <>
            <ContentSubTitle>계정 삭제</ContentSubTitle>
            <ContentContainer className="flex items-center">
                <span className="flex-1 text-[#606060] font-medium text-sm">계정 삭제 시 프로필 및 응시한 테스트 정보가 삭제 됩니다.</span>
                <ContentButtonV1 onClick={onDeleteClick}>삭제하기</ContentButtonV1>
            </ContentContainer>
        </>
    );
}
