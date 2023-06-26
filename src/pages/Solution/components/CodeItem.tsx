import { Code } from '@/components/Code';
import classNames from 'classnames';

export const CodeItem = ({ solution, onLike }: CodeItemProps) => {
    return (
        <div className="p-[40px_0]">
            <div className="block mb-[6px]">
                <div className="inline-block w-[36px] h-[36px] p-[6px] mr-[10px] bg-[#d7e2eb] align-middle rounded-[4px]">
                    <svg viewBox="0 0 24 24" className="fill-[#263747]">
                        <path
                            fillRule="evenodd"
                            d="M17 8c0-2.763-2.238-5-5-5S7 5.237 7 8c0 2.762 2.238 5 5 5s5-2.238 5-5ZM4 18.5V21h16v-2.5c0-3.325-4.662-4-8-4s-8 .675-8 4Z"
                        ></path>
                    </svg>
                </div>
                <h5 className="inline-block font-[700] align-middle mt-0.5">{solution.userName}</h5>
                <h5 className="inline-block text-[14px] float-right text-[#98a8b9] leading-[36px]">사용 언어: JavaScript</h5>
            </div>
            <div className="h-[400px] bg-[#263747] p-[16px_16px_8px] rounded-[4px_4px_0_0]">
                <Code content={solution.userCode} color="#202B3D" />
            </div>
            <div className="bg-[#263747] border-t-[1px] border-[#172334] align-middle p-[16px] rounded-[0_0_4px_4px]">
                <button
                    className={classNames(
                        solution.isAlreadyLike ? 'bg-[#0078ff] hover:bg-[#0053f4]' : 'bg-[#44576c] hover:bg-[#343a40]',
                        'flex items-center text-[white] text-[12px] p-[2px_8px_2px_8px] align-middle text-center rounded-[4px] cursor-pointer'
                    )}
                    onClick={() => onLike(solution.userEmail)}
                >
                    <h5 className="mt-0.5">좋아요&nbsp;</h5>
                    <h5 className="mt-0.5 font-[700]">{solution.likeCount}</h5>
                </button>
            </div>
        </div>
    );
};
