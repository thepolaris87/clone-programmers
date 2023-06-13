import styled from '@emotion/styled';

export const TestContainer = styled.div`
    .title {
        color: white;
        font-size: 15px;
    }
    .textBox {
        color: #b2c0cc;
        font-size: 16px;
        margin-top: 16px;
        line-height: 1.8rem;
    }
    .codeBox {
        padding: 1rem;
        background-color: #202b3d;
        color: white;
        font-size: 16px;
        margin-top: 16px;
    }
    .restriction {
        color: #b2c0cc;
        font-size: 16px;
        margin-top: 4px;
        margin-left: 16px;
    }
    .restriction2 {
        color: #b2c0cc;
        font-size: 16px;
        margin-top: 4px;
        margin-left: 36px;
    }
    .example {
        color: #b2c0cc;
        font-size: 16px;
        font-weight: 400;
        margin-top: 12px;
    }
    .description {
        color: #b2c0cc;
        font-size: 16px;
        margin-top: 16px;
        margin-left: 16px;
    }
    .line {
        width: 100%;
        border: 0.5px solid #172334;
    }
    .table {
        background-color: #202b3d;
        color: white;
        margin-top: 10px;
        text-align: center;
        border: 0.5px solid rgb(23, 35, 52);
        th {
            height: 2rem;
            font-weight: 400;
            color: white;
            border: 0.5px solid rgb(23, 35, 52);
        }
        td {
            height: 2rem;
            min-width: 4rem;
            text-align: center;
            color: #b2c0cc;
            border: 1px solid rgb(23, 35, 52);
        }
    }
`;
