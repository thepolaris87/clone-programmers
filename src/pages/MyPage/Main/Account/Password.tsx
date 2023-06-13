import { ContentContainer, ContentSubTitle } from '../../MyPage.styles';

export default function Password() {
    return (
        <>
            <ContentSubTitle>비밀번호</ContentSubTitle>
            <ContentContainer className="flex mb-8">
                <div className="flex-1">
                    <div className="text-[#606060] text-[13px] font-medium">최근 업데이트 : 2023-06-05</div>
                    <div className="text-[#424242] text-[15px] font-medium">비밀번호</div>
                </div>
                <button className="border rounded-md text-[#263747] bg-[#FBFBFE] font-bold pt-1 px-3 hover:bg-[#d7e2eb]">비밀번호 변경</button>
            </ContentContainer>
        </>
    );
}
