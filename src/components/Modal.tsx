import { ReactNode, useState, useEffect } from 'react';
import classNames from 'classnames';

type ModalProps = {
    children: ReactNode;
    title: string;
    button: string;
    open: boolean;
    onClick: (value: boolean) => void;
};

export const Modal = ({ children, title, button, open, onClick }: ModalProps) => {
    const [animate, setAnimate] = useState(false);
    const [visible, setVisible] = useState(open);

    useEffect(() => {
        setVisible(open);
        if (visible && !open) {
            setAnimate(true);
            setTimeout(() => setAnimate(false), 300);
        }
        return () => {
            setVisible(false);
        };
    }, [visible, open]);

    if (!animate && !visible) return null;
    return (
        <div
            className={classNames(
                'fixed flex justify-center items-center top-0 left-0 w-[100%] h-[100%] z-[1050] bg-[rgba(40,56,80,0.8)]',
                open ? 'modal-wrapper fade' : 'modal-wrapper'
            )}
        >
            <div className={classNames('w-[600px] m-[40px]', open ? 'modal-content fade' : 'modal-content')}>
                <div className="w-[43.75rem] rounded-[0.25rem] bg-[white]">
                    <div className="h-[71px] p-[1.25rem_1.5rem_0_1.5rem]">
                        <button
                            className="float-right text-[1.5rem] text-[#000] opacity-[0.16] leading-1 font-[700] hover:opacity-[0.5]"
                            onClick={() => onClick(false)}
                        >
                            x
                        </button>
                        <h3 className="text-[#263747] text-[26px] font-[700] mb-0 leading-[1.5]">{title}</h3>
                    </div>
                    <div className="p-[1.5rem]">{children}</div>
                    <div className="p-[1.5rem] flex justify-end">
                        <button
                            className="bg-[#0078FF] text-[white] text-[1rem] font-[500] leading-[1.5rem] p-[0.4375rem_0.8125rem] rounded-[0.25rem] hover:bg-[#0053f4]"
                            onClick={() => onClick(false)}
                        >
                            <h5 className="mt-0.5">{button}</h5>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
