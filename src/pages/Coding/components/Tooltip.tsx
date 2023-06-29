import React from 'react';

export const ToolTip = ({ children }: { children: string }) => {
    return (
        <React.Fragment>
            <div className="group-hover:flex hidden w-[320px] text-[14.5px] font-[NotoSansKRRegular] absolute bottom-12 bg-[white] rounded-[4px] p-3 border-[#cdd8dd] border-[1px]">
                <h5 className="break-all">{children}</h5>
            </div>
        </React.Fragment>
    );
};
