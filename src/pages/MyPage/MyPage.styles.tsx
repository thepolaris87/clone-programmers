import styled from '@emotion/styled';
import classNames from 'classnames';

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

    &:hover {
        background-color: #0053f4;
    }
`;
