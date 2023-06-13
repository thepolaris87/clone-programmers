import { ReactNode } from 'react';

type ModalProps = {
    children: ReactNode;
    title: string;
    button: string;
    onClick: (value: boolean) => void;
};

export const Modal = ({ children, title, button, onClick }: ModalProps) => {
    return (
        <div className='modal-wrapper-in fixed flex justify-center items-center top-0 left-0 w-[100%] h-[100%] z-[1050] bg-[rgba(40,56,80,0.8)]'>
            <div className='modal-content-in w-[600px] m-[40px]'>
                <div className='w-[43.75rem] rounded-[0.25rem] bg-[white]'>
                    <div className='h-[71px] p-[1.25rem_1.5rem_0_1.5rem]'>
                        <button className='float-right text-[1.5rem] text-[#000] opacity-[0.16] leading-1 font-[700] hover:opacity-[0.5]' onClick={() => onClick(false)}>
                            x
                        </button>
                        <h3 className='text-[#263747] text-[26px] font-[700] mb-0 leading-[1.5]'>{title}</h3>
                    </div>
                    <div className='p-[1.5rem]'>{children}</div>
                    <div className='p-[1.5rem] flex justify-end'>
                        <button
                            className='bg-[#0078FF] text-[white] text-[1rem] font-[500] leading-[1.5rem] p-[0.4375rem_0.8125rem] rounded-[0.25rem]'
                            onClick={() => onClick(false)}
                        >
                            {button}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
