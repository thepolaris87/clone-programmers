import styled from '@emotion/styled';
// ${(props) => (props.mode ? 'white' : '#263747')};
export const TestContainer = styled.div<{ mode: number }>`
    .title {
        color: ${(props) => (props.mode ? 'white' : '#263747')};
        font-size: 15px;
    }
    .textBox {
        color: ${(props) => (props.mode ? '#b2c0cc' : '#263747')};
        font-size: 16px;
        margin-top: 16px;
        line-height: 28.8px;
    }
    .codeBox {
        padding: 16px;
        background-color: ${(props) => (props.mode ? '#202b3d' : '#f1f4f7')};
        color: ${(props) => (props.mode ? 'white' : '#263747')};
        font-size: 16px;
        margin-top: 16px;
    }
    .restriction {
        color: ${(props) => (props.mode ? '#b2c0cc' : '#263747')};
        font-size: 16px;
        margin-top: 4px;
        margin-left: 16px;
    }
    .restriction2 {
        color: ${(props) => (props.mode ? '#b2c0cc' : '#263747')};
        font-size: 16px;
        margin-top: 4px;
        margin-left: 36px;
    }
    .example {
        color: ${(props) => (props.mode ? '#b2c0cc' : '#263747')};
        font-size: 16px;
        font-weight: 400;
        margin-top: 12px;
    }
    .description {
        color: ${(props) => (props.mode ? '#b2c0cc' : '#263747')};
        font-size: 16px;
        margin-top: 16px;
        margin-left: 16px;
    }
    .line {
        width: 100%;
        border-bottom: ${(props) => (props.mode ? '0.1px solid #172334' : '0.1px solid #d7e2eb')};
    }
    .table {
        background-color: ${(props) => (props.mode ? '#202b3d' : '#f1f4f7')};
        color: ${(props) => (props.mode ? 'white' : '#263747')};
        margin-top: 10px;
        text-align: center;
        border: ${(props) => (props.mode ? '0.5px solid rgb(23, 35, 52)' : '0.5px solid #d7e2eb')};
        th {
            height: 32px;
            font-weight: 400;
            color: ${(props) => (props.mode ? 'white' : '#263747')};
            border: ${(props) => (props.mode ? '0.5px solid rgb(23, 35, 52)' : '0.5px solid #d7e2eb')};
        }
        td {
            height: 32px;
            min-width: 64px;
            text-align: center;
            color: ${(props) => (props.mode ? '#b2c0cc' : '#263747')};
            border: ${(props) => (props.mode ? '0.5px solid rgb(23, 35, 52)' : '0.5px solid #d7e2eb')};
        }
    }
`;
