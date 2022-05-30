import styled from "@emotion/styled";

export const ButtonCreate = styled.div`
    box-shadow: inset 0 1px 0 0 rgb(255 255 255 / 20%);
    background-color: rgb(6 182 212);
    border: none;
    border-radius: 6px;
    padding: 10px 16px;
    color: white;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    margin: ${props => props.top ? '8px 20px' : '8px'};
    @media (min-width: 768px) {
        margin: ${props => props.top ? '20px' : '8px'};
    }
`;

export const ButtonDelete = styled.div`
    box-shadow: inset 0 1px 0 0 rgb(229 59 59);
    background-color: rgb(229 59 59);
    border: none;
    border-radius: 6px;
    padding: 10px 16px;
    color: white;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    margin: 8px;
    cursor: pointer;
`;

export const ActionWrapper = styled.div`
    display: grid;
`;

export const InputGroup = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: inline-block;
`;

export const ButtonSubmit = styled.button`
    box-shadow: inset 0 1px 0 0 rgb(255 255 255 / 20%);
    background-color: rgb(6 182 212);
    border: none;
    border-radius: 6px;
    padding: 10px 16px;
    color: white;
    font-size: 14px;
    font-weight: bold;
    width: 100%;
    margin-top: 8px;
    cursor: pointer;
`;

export const InputForm = styled.input`
    display: inline-block;
    max-width: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 6px;
    margin: 0.5rem 2px;
`;
