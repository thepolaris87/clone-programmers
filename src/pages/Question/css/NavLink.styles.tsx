import styled from '@emotion/styled';

export const List = styled.li`
    display: inline-block;
    font-size: 14px;
    margin-right: 4px;
    line-height: 1.6;
    a {
        color: #263747;
        font-weight: 400;
        cursor: pointer;
        :hover {
            color: #0078ff;
        }
    }
    div {
        color: #263747;
        font-weight: 400;
        padding: 0 4px 0 4px;
    }
    p {
        color: #263747;
        font-weight: 700;
    }
`;
