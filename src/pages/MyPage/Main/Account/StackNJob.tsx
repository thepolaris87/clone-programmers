import { useSetAtom } from 'jotai';
import { ContentButtonV1, ContentContainer, ContentSubTitle, StackNJobWrapper } from '../../MyPage.styles';
import { modal } from '../../atoms';

export default function StackNJob() {
    const setModalMessage = useSetAtom(modal);
    const onStackChangeClick = () => {
        setModalMessage({ message: '주요 기술 변경 준비 중입니다.' });
    };

    const onJobChangeClick = () => {
        setModalMessage({ message: '희망 직무 변경 준비 중입니다.' });
    };

    return (
        <>
            <ContentSubTitle>주요 기술 및 희망 직무</ContentSubTitle>
            <ContentContainer className="mb-8">
                <div className="flex items-center">
                    <div className="flex-1">
                        <div className="text-[#606060] text-[13px] font-medium">
                            <span>주요 기술</span>
                            <span> - 최대 3개 선택 가능</span>
                        </div>
                        <div className="h-5 flex mt-1">
                            <StackNJobWrapper>HTML</StackNJobWrapper>
                            <StackNJobWrapper>CSS</StackNJobWrapper>
                            <StackNJobWrapper>Javascript</StackNJobWrapper>
                        </div>
                    </div>
                    <ContentButtonV1 onClick={onStackChangeClick}>주요 기술 변경</ContentButtonV1>
                </div>
                <hr className="my-7" />
                <div className="flex items-center">
                    <div className="flex-1">
                        <div className="text-[#606060] text-[13px] font-medium">
                            <span>희망 직무</span>
                            <span> - 최대 3개 선택 가능</span>
                        </div>
                        <div className="h-5 flex mt-1">
                            <StackNJobWrapper>웹 풀스택</StackNJobWrapper>
                            <StackNJobWrapper>안드로이드 앱</StackNJobWrapper>
                            <StackNJobWrapper>아이폰 앱</StackNJobWrapper>
                        </div>
                    </div>
                    <ContentButtonV1 onClick={onJobChangeClick}>희망 직무 선택</ContentButtonV1>
                </div>
            </ContentContainer>
        </>
    );
}
