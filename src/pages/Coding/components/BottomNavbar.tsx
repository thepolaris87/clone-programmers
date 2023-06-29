import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { ToolTip } from '.';

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
                <div className="group flex relative justify-center">
                    <button className="w-[72px] h-[40px] bg-[#44576c] hover:bg-[#37485D] text-[white] rounded-[4px] mx-[4px]" onClick={() => onReset()}>
                        <h5>초기화</h5>
                    </button>
                    <ToolTip>에디터의 코드가 초기화됩니다. 초기화 버튼을 누르기 이전 코드 복원하려면 코드 에디터에 커서를 두고 Ctrl-Z를 눌러보세요.</ToolTip>
                </div>
                <div className="group flex relative justify-center">
                    <button className="w-[91px] h-[40px] bg-[#44576c] hover:bg-[#37485D] text-[white] rounded-[4px] mx-[4px]" onClick={() => runFunc()}>
                        <h5>코드 실행</h5>
                    </button>
                    <ToolTip>작성한 코드를 제출하기 전에 먼저 실행해볼 수 있습니다. [코드 실행]은 예시 테스트 케이스를 실행합니다.</ToolTip>
                </div>
                <div className="group flex relative justify-end">
                    <button className="w-[140px] h-[40px] bg-[#0078ff] hover:bg-[#0053f4] text-[white] rounded-[4px] mx-[4px]" onClick={() => onSubmit()}>
                        <h5>제출 후 채점하기</h5>
                    </button>
                    <ToolTip>시험 종료 전까지 언제든 다시 제출할 수 있으며, 제출한 코드 중 가장 높은 점수를 낸 코드가 최종 답안이 됩니다.</ToolTip>
                </div>
            </span>
        </section>
    );
};
