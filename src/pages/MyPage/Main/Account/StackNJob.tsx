import { ContentButtonV1, ContentContainer, ContentSubTitle } from '../../MyPage.styles';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return <div className="bg-[#f0f5fa] text-[#44576c] text-[12px] pt-0.5 px-1 border rounded mr-1">{children}</div>;
};

export default function StackNJob() {
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
                        <div className="h-5 flex">
                            <Wrapper>HTML</Wrapper>
                            <Wrapper>CSS</Wrapper>
                            <Wrapper>Javascript</Wrapper>
                        </div>
                    </div>
                    <ContentButtonV1>주요 기술 변경</ContentButtonV1>
                </div>
                <hr className="my-7" />
                <div className="flex items-center">
                    <div className="flex-1">
                        <div className="text-[#606060] text-[13px] font-medium">
                            <span>희망 직무</span>
                            <span> - 최대 3개 선택 가능</span>
                        </div>
                        <div className="h-5 flex">                                                        
                            <Wrapper>웹 풀스택</Wrapper>
                            <Wrapper>안드로이드 앱</Wrapper>
                            <Wrapper>아이폰 앱</Wrapper>
                        </div>
                    </div>
                    <ContentButtonV1>희망 직무 선택</ContentButtonV1>
                </div>
            </ContentContainer>
        </>
    );
}
