import classNames from 'classnames';

export const Header = ({ value, setValue }: SolutionHeaderProps) => {
    return (
        <div className="flex justify-between mt-[24px]">
            <div className="relative inline-flex align-middle">
                <button
                    className={classNames(
                        value ? 'bg-[#d7e2eb]' : 'bg-[#e9ecf3]',
                        ' text-[#263747] text-[14px] md:text-[16px] p-[5px_13px] md:p-[7px_13px] leading-[1.5] font-[NotoSansKRMedium] rounded-[4px_0_0_4px] hover:bg-[#d7e2eb]'
                    )}
                    onClick={() => setValue(true)}
                >
                    <h5 className="mb-0.5">모든 풀이</h5>
                </button>
                <button
                    className={classNames(
                        value ? 'bg-[#e9ecf3]' : 'bg-[#d7e2eb]',
                        'text-[#263747] text-[14px] md:text-[16px] p-[5px_13px] md:p-[7px_13px] leading-[1.5] font-[NotoSansKRMedium] rounded-[0_4px_4px_0] ml-[-1px] hover:bg-[#d7e2eb]'
                    )}
                    onClick={() => setValue(false)}
                >
                    <h5 className="mb-0.5">나의 풀이</h5>
                </button>
            </div>
            <button className="bg-[#e9ecf3] text-[#263747] text-[14px] md:text-[16px] p-[5px_13px] md:p-[7px_13px] leading-[1.5] font-[NotoSansKRMedium] rounded-[4px]">
                <h5 className="mb-0.5">JavaScript</h5>
            </button>
        </div>
    );
};
