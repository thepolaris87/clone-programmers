import { ContentContainer, ContentSubTitle } from '../../MyPage.styles';

export default function AlertEmail() {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.checked);
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
                        <label>
                            <input hidden type="checkbox" id="toggle" onChange={onChange} />
                            <div className="w-5 h-5 rounded-full bg-slate-500"></div>
                        </label>
                    </div>
                </div>
                <hr className="my-7" />
                <div className="flex items-center">
                    <div className="flex-1">
                        <div>마케팅 활용 동의 및 광고 수신 동의</div>
                        <div>각종 이벤트, 회원 혜택, 할인 행사등 마케팅 알림을 받겠습니다.</div>
                    </div>
                    <div>Toggle</div>
                </div>
            </ContentContainer>
        </>
    );
}
