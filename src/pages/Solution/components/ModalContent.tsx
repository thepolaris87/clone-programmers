import * as MarkDown from '@/assets/programmers/index';
import { TestContainer } from '@/pages/Coding/css/CodingTest.styles';

export const ModalContent = ({ onClick, questionId }: { onClick: (value: boolean) => void; questionId: string }) => {
    const MarkDownTag = MarkDown[questionId as keyof typeof MarkDown];
    return (
        <TestContainer mode={0}>
            <MarkDownTag />
            <div className="pt-[40px] flex justify-end">
                <button
                    className="bg-[#0078FF] text-[white] text-[14px] md:text-[16px] leading-[24px] p-[5px_8px] md:p-[7px_13px] rounded-[4px] hover:bg-[#0053f4] font-[NotoSansKRMedium]"
                    onClick={() => onClick(false)}
                >
                    <h5 className="mb-0.5">확인</h5>
                </button>
            </div>
        </TestContainer>
    );
};
