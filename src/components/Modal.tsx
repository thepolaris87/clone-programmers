import React, { ReactNode, useState, useEffect, useRef } from 'react';
import classNames from 'classnames';

type ModalProps = {
    children: ReactNode;
    title: string;
    width: string;
    open: boolean | undefined;
    onClick: (value: boolean) => void;
};

export const Modal = ({ children, title, width, open, onClick }: ModalProps) => {
    const [animate, setAnimate] = useState(false);
    const [visible, setVisible] = useState(open);
    const modalRef = useRef<HTMLDivElement | null>(null);

    const onClickOut = (e: React.MouseEvent) => {
        if (!modalRef.current?.contains(e.target as Node)) onClick(false);
    };

    useEffect(() => {
        setVisible(open);
        if (visible && !open) {
            setAnimate(true);
            setTimeout(() => setAnimate(false), 300);
        }
        return () => {
            setVisible(false);
        };
    }, [visible, open, width]);
    if (!animate && !visible) return null;

    return (
        <div
            className={classNames(
                'fixed flex justify-center top-0 w-[100%] h-[100%] z-[1050] bg-[rgba(40,56,80,0.8)] overflow-auto',
                open ? 'modal-wrapper fade' : 'modal-wrapper'
            )}
            onClick={onClickOut}
        >
            <div className={classNames(`sm:w-[auto] m-[40px]`, open ? 'modal-content fade' : 'modal-content')} style={{ width: width }}>
                <div className={'rounded-[4px] bg-[white]'} ref={modalRef}>
                    <div className="p-[16px_16px_0_16px] lg:p-[32px_40px_0] md:p-[24px_24px_0]">
                        <button
                            className="float-right text-[24px] text-[#000] opacity-[0.16] leading-1 font-[NotoSansKRBold] hover:opacity-[0.5]"
                            onClick={() => onClick(false)}
                        >
                            x
                        </button>
                        <h3 className="text-[#263747] text-[26px] font-[NotoSansKRBold] leading-[1.5]">{title}</h3>
                    </div>
                    <div className="p-[16px] lg:p-[40px] md:p-[24px]">{children}</div>
                </div>
            </div>
        </div>
    );
};
