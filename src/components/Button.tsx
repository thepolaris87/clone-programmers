import styled from '@emotion/styled';

type ButtonProps = {
    width?: string;
    height?: string;
    fontSize?: string;
    fontWeight?: string;
    bc?: string;
    c?: string;
    mt?: string;
    ml?: string;
    mb?: string;
    mr?: string;
    br?: string;
    padding?: string;
    bs?: string;
    border?: string;
    hbc?: string;
    hc?: string;
    name: string;
};
const StyledButton = styled.button`
    width: ${(props: ButtonProps) => (props.width ? props.width : '150px')};
    height: ${(props: ButtonProps) => (props.height ? props.height : '50px')};
    font-size: ${(props: ButtonProps) => (props.fontSize ? props.fontSize : '1rem')};
    font-weight: ${(props: ButtonProps) => (props.fontWeight ? props.fontWeight : '600')};
    background-color: ${(props: ButtonProps) => (props.bc ? props.bc : '#44576c')};
    color: ${(props: ButtonProps) => (props.c ? props.c : 'white')};
    margin-top: ${(props: ButtonProps) => (props.mt ? props.mt : '')};
    margin-left: ${(props: ButtonProps) => (props.ml ? props.ml : '')};
    margin-bottom: ${(props: ButtonProps) => (props.mb ? props.mb : '')};
    margin-right: ${(props: ButtonProps) => (props.mr ? props.mr : '')};
    padding: ${(props: ButtonProps) => (props.padding ? props.padding : '0px')};
    box-shadow: ${(props: ButtonProps) => (props.bs ? props.bs : '')};
    border: ${(props: ButtonProps) => (props.border ? props.border : 'none')};
    border-radius: ${(props: ButtonProps) => (props.br ? props.br : '')};
    cursor: pointer;
    :hover {
        background-color: ${(props: ButtonProps) => (props.hbc ? props.hbc : 'none')};
        color: ${(props: ButtonProps) => (props.hc ? props.hc : 'none')};
    }
`;

export const Button = (props: ButtonProps) => {
    return (
        <StyledButton {...props}>
            <div className='mt-1'>{props.name}</div>
        </StyledButton>
    );
};
