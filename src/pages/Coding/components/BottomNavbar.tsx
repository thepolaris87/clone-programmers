import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

export const BottomNavbar = ({ functions, questionId, mode }: BottomNavbarProps) => {
    const [onReset, runFunc, onSubmit] = functions;
    const navigate = useNavigate();

    return (
        <section
            className={classNames(
                mode ? 'bg-[#263747] border-[#172334]' : 'bg-[#f1f4f7] border-[#cdd8dd]',
                'flex justify-between h-[57px] border-t-[1px] px-[16px] py-[8px] font-[NotoSansKRMedium]'
            )}
        >
            <span className="hidden md:flex">
                <button
                    className="w-[113px] h-[40px] bg-[#44576c] hover:bg-[#37485D] text-[white] rounded-[4px] mx-[4px]"
                    onClick={() => navigate(`/learn/courses/${questionId}/questions`)}
                >
                    <h5>질문하기</h5>
                </button>
            </span>
            <span className="flex">
                <button
                    className="hidden w-[160px] h-[40px] bg-[#44576c] hover:bg-[#37485D] text-[white] rounded-[4px] mx-[4px] md:block"
                    onClick={() => navigate(`/learn/solution/${questionId}`)}
                >
                    <h5>다른 사람의 풀이</h5>
                </button>
                <button className="w-[72px] h-[40px] bg-[#44576c] hover:bg-[#37485D] text-[white] rounded-[4px] mx-[4px]" onClick={() => onReset()}>
                    <h5>초기화</h5>
                </button>
                <button className="w-[91px] h-[40px] bg-[#44576c] hover:bg-[#37485D] text-[white] rounded-[4px] mx-[4px]" onClick={() => runFunc()}>
                    <h5>코드 실행</h5>
                </button>
                <button className="w-[140px] h-[40px] bg-[#0078ff] hover:bg-[#0053f4] text-[white] rounded-[4px] mx-[4px]" onClick={() => onSubmit()}>
                    <h5>제출 후 채점하기</h5>
                </button>
            </span>
        </section>
    );
};
