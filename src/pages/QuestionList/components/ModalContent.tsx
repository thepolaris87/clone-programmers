export const ModalContent = ({ onClick }: { onClick: (value: boolean) => void }) => {
    return (
        <div>
            <div className="mb-[16px]">
                <label className="inline-block text-[14px] leading-[24px] mb-[2px]">
                    <h5 className="inline-block align-top text-[#f44336] font-[700] text-[20px] mr-[2px]">* </h5>제목
                </label>
                <input
                    required={true}
                    placeholder="입력하세요."
                    className="w-[100%] h-[40px] p-[8px_12px] bg-[#fbfbfd] font-[400] text-[#263747] text-[13px] md:text-[16px] leading-[24px] border-[1.5px] border-[#d7e2eb] rounded-[4px] hover:border-[#0078FF]"
                ></input>
            </div>
            <div className="m-[16px_0_0_0]">
                <label className="inline-block text-[14px] leading-[24px] mb-[2px]">
                    <h5 className="inline-block align-top text-[#f44336] font-[700] text-[20px] mr-[2px]">* </h5>내용
                </label>
                <textarea
                    required={true}
                    rows={10}
                    placeholder={`문제와 관련된 질문을 구체적으로 작성해주세요.\n타인에 대한 비방이나 욕설, 광고, 정답 공개 등 게시판의 목적과 관련 없는 내용은 삭제될 수 있습니다.`}
                    className="block w-[100%] h-auto p-[8px_12px] bg-[#fbfbfd] font-[400] text-[#263747] text-[13px] md:text-[16px] leading-[24px] border-[1.5px] border-[#d7e2eb] rounded-[4px_4px_0_0] hover:border-[#0078FF]"
                ></textarea>
            </div>
            <h5 className="p-[8px_12px] mt-0 mb-[16px] border-[1px] border-t-0 border-[#d7e2eb] text-[#b2c0cc] text-[12px] leading-[18px] rounded-[0_0_3px_3px]">
                이 입력폼은 마크다운 문법을 지원합니다.
                <a
                    className="text-[#0078ff] font-[700]"
                    href="https://qna.programmers.co.kr/questions/1772/%EB%A7%88%ED%81%AC%EB%8B%A4%EC%9A%B4-%EB%AC%B8%EB%B2%95-%EC%9E%91%EC%84%B1-%ED%8C%81"
                >
                    &nbsp;마크다운 가이드
                </a>
                를 참고하세요.
            </h5>
            <div className="m-[16px_0_0_0]">
                <div className="relative">
                    <input type="checkbox" className="border-[#263747] accent-[#263747] w-[16px] h-[16px] mr-[6px] rounded-[4px] align-middle cursor-pointer" />
                    <label className="inline-block text-[14px] leading-[1.5]">내 질문에 답변이 올라오면 이메일로 알림을 받습니다.</label>
                </div>
            </div>
            <div className="m-[16px_0_0_0]">
                <input type="checkbox" className="border-[#263747] accent-[#263747] w-[16px] h-[16px] mr-[6px] rounded-[4px] align-middle cursor-pointer" />
                <label className="inline-block text-[14px] leading-[1.5]">내 코드를 첨부합니다.</label>
            </div>
            <div className="pt-[40px] flex flex-wrap justify-end">
                <button
                    className="bg-[#E9ECF3] text-[#263747] text-[14px] sm:text-[16px] font-[500] leading-[24px] p-[7px_13px] mx-[4px] rounded-[4px] hover:bg-[#D7DEEF]"
                    onClick={() => onClick(false)}
                >
                    <h5 className="mt-0.5">미리 보기</h5>
                </button>
                <button
                    className="bg-[#E9ECF3] text-[#263747] text-[14px] sm:text-[16px] font-[500] leading-[24px] p-[7px_13px] mx-[4px] rounded-[4px] hover:bg-[#D7DEEF]"
                    onClick={() => onClick(false)}
                >
                    <h5 className="mt-0.5">취소</h5>
                </button>
                <button
                    className="bg-[#0078ff] text-[white] bg-opacity-40 text-[14px] sm:text-[16px]  font-[500] leading-[24px] p-[7px_13px] mx-[4px] rounded-[4px] cursor-not-allowed"
                    onClick={() => onClick(false)}
                    disabled={true}
                >
                    <h5 className="mt-0.5">등록</h5>
                </button>
            </div>
        </div>
    );
};
