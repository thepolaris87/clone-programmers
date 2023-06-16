import styled from '@emotion/styled';

const Loader = styled.div`
    width: 15px;
    height: 15px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export const Spinner = () => {
    return <Loader />;
};
