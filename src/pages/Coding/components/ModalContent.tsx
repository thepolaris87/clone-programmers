import React from 'react';

export const ModalContent = ({ onClick }: { onClick: (value: boolean) => void }) => {
    return (
        <React.Fragment>
            <table>
                <thead className="text-left border-t-[1px] border-[#d7e2eb]">
                    <tr>
                        <th className="w-[95px] p-[4px_8px]">언어</th>
                        <th className="w-[172px] p-[4px_8px]">컴파일러</th>
                        <th className="w-[384px] p-[4px_8px]">컴파일 커맨드</th>
                    </tr>
                </thead>
                <tbody className="bg-[rgba(50,50,144,0.02)] border-t-[1px] border-[#d7e2eb]">
                    <tr>
                        <td className="w-[172px] p-[4px_8px]">JavaScript</td>
                        <td className="w-[172px] p-[4px_8px]">Node.js 16.17.0</td>
                        <td className="w-[384px] p-[4px_8px]"></td>
                    </tr>
                </tbody>
            </table>
            <div className="pt-[40px] flex justify-end">
                <button
                    className="bg-[#0078FF] text-[white] text-[16px] font-[500] leading-[24px] p-[7px_13px] rounded-[4px] hover:bg-[#0053f4]"
                    onClick={() => onClick(false)}
                >
                    <h5 className="mt-0.5">닫기</h5>
                </button>
            </div>
        </React.Fragment>
    );
};
