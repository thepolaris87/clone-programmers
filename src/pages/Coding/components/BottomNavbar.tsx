import { useNavigate } from 'react-router-dom';

export const BottomNavbar = ({ functions, questionId }: { functions: (() => void)[]; questionId: string }) => {
    const [onReset, runFunc, onSubmit] = functions;
    const navigate = useNavigate();

    return (
        <section className="flex justify-between h-[57px] bg-[#263747] border-t-[1px] border-[#172334] px-[16px] py-[8px]">
            <span className="hidden md:flex">
                <button
                    className="w-[113px] h-[40px] bg-[#44576c] hover:bg-[#37485D] text-[white] font-[600] rounded-[4px] mx-[4px]"
                    onClick={() => navigate(`/learn/courses/${questionId}/questions`)}
                >
                    <h5 className="mt-1">질문하기</h5>
                </button>
                <button className="w-[183px] h-[40px] bg-[#44576c] hover:bg-[#37485D] text-[white] font-[600] rounded-[4px] mx-[4px]">
                    <h5 className="mt-1">테스트 케이스 추가하기</h5>
                </button>
            </span>
            <span className="flex">
                <button
                    className="hidden w-[160px] h-[40px] bg-[#44576c] hover:bg-[#37485D] text-[white] font-[600] rounded-[4px] mx-[4px] md:block"
                    onClick={() => navigate(`/learn/solution/${questionId}`)}
                >
                    <h5 className="mt-1">다른 사람의 풀이</h5>
                </button>
                <button className="w-[72px] h-[40px] bg-[#44576c] hover:bg-[#37485D] text-[white] font-[600] rounded-[4px] mx-[4px]" onClick={onReset}>
                    <h5 className="mt-1">초기화</h5>
                </button>
                <button className="w-[91px] h-[40px] bg-[#44576c] hover:bg-[#37485D] text-[white] font-[600] rounded-[4px] mx-[4px]" onClick={runFunc}>
                    <h5 className="mt-1">코드 실행</h5>
                </button>
                <button className="w-[140px] h-[40px] bg-[#0078ff] hover:bg-[#0053f4] text-[white] font-[600] rounded-[4px] mx-[4px]" onClick={onSubmit}>
                    <h5 className="mt-1">제출 후 채점하기</h5>
                </button>
            </span>
        </section>
    );
};
