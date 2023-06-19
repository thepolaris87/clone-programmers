import styled from '@emotion/styled';
import classNames from 'classnames';
import { useAtom, useAtomValue } from 'jotai';
import { modal } from './atoms';
import { useEffect } from 'react';

export const HeaderContainer = styled.header`
    .btn1 {
        color: #000;
        font-size: 1.125rem;
        font-weight: 500;
    }

    .btn2 {
        color: #6b6b6b;
        font-size: 0.9375rem;
        font-weight: 400;
    }
`;

export const ContentTitle = styled.h4`
    font-weight: 700;
    font-size: 26px;
    margin-bottom: 24px;
`;

export const ContentSubTitle = styled.h5`
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 16px;
`;

export const ContentContainer = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
    return <div className={classNames('border bg-white rounded-xl p-6', className)}>{children}</div>;
};

export const ContentButtonV1 = styled.button`
    border-width: 1px;
    border-radius: 6px;
    color: #263747;
    background-color: #fbfbfe;
    font-weight: 700;
    padding-top: 4px;
    padding-inline: 12px;
    height: 42px;
    word-break: keep-all;

    &:hover {
        background-color: #d7e2eb;
    }
`;

export const ContentButtonV2 = styled.button`
    background-color: #0078ff;
    color: #fff;
    font-weight: 700;
    padding-inline: 24px;
    padding-top: 8px;
    padding-bottom: 4px;
    border-radius: 6px;
    word-break: keep-all;

    &:hover {
        background-color: #0053f4;
    }
`;

export const ContentButtonV3 = styled.button`
    border: 1px solid transparent;
    border-radius: 6px;
    background-color: #e6f2ff;
    color: #0078ff;
    font-weight: 700;
    padding-inline: 16px;
    padding-top: 4px;
    padding-inline: 12px;
    height: 42px;
    word-break: keep-all;

    &:hover {
        background-color: #cde5ff;
    }
`;

export const Toggle = ({ checked, onChange }: { checked?: boolean; onChange?: (e: React.FormEvent<HTMLLabelElement>) => void }) => {
    return (
        <label className="cursor-pointer" onChange={onChange}>
            <input hidden type="checkbox" />
            <div className={classNames('w-16 p-1 rounded-3xl flex', checked ? 'bg-[#2196f3]' : 'bg-[#ccc]')}>
                <div className={classNames('w-5 h-5 rounded-full bg-white transition-all duration-300', checked ? 'ml-0' : 'ml-9')}></div>
            </div>
        </label>
    );
};

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
    const [_modal, _setModal] = useAtom(modal);
    useEffect(() => {
        if (!_modal.message) return;

        setTimeout(() => {
            _setModal({ message: '' });
        }, 1000);
    }, [_setModal, _modal.message]);
    
    return (
        <>
            {children}
            {_modal.message && (
                <div className="fixed inset-0 flex justify-center items-center text-lg bg-[#0000004c]">
                    <div className="bg-white p-10 rounded-xl">{_modal.message}</div>
                </div>
            )}
        </>
    );
};

export const StackNJobWrapper = ({ children }: { children: React.ReactNode }) => {
    return <div className="bg-[#f0f5fa] text-[#44576c] text-[12px] pt-0.5 px-1 border rounded mr-1">{children}</div>;
};