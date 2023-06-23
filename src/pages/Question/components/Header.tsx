import { useNavigate } from 'react-router-dom';

export const Header = ({ email, userEmail, delQuestionMutate, questionId, id }: HeaderProps) => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-between items-center">
            <button
                className="w-[147px] bg-[#EEEBFF] border-[#EEEBFF] border-b-[1px] rounded-[4px] text-[#0078FF] text-[14px] md:text-[16px] font-[600] mb-[32px] p-[5px_9px] md:p-[7px] hover:bg-[#D8DDFF]"
                onClick={() => navigate(`/learn/courses/${id}`)}
            >
                <h5 className="mt-1">&#60;&nbsp; 강의로 돌아가기</h5>
            </button>
            {email === userEmail && (
                <button
                    className="hidden bg-[#0078ff] text-[white] text-[14px] md:text-[16px] font-[500] mb-[32px] p-[5px_13px] md:p-[7px_13px] sm:block rounded-[4px] hover:bg-[#0053f4]"
                    onClick={() => delQuestionMutate(questionId)}
                >
                    <h5 className="mt-0.5">삭제</h5>
                </button>
            )}
        </div>
    );
};
