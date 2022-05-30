import styled from "@emotion/styled";

export const PaginationDiv = styled.div`
    display: flex;
    padding: 10px;
    justify-content: space-between;
    @media (min-width: 768px) {
        width: 40%;
        justify-content: space-around;
        margin: auto;
    }
`;

export const PaginationA = styled.a`
    background: ${(props) => (props.isActive ? "rgb(6 182 212)" : "white")};
    color: ${(props) => (props.isActive ? "white" : "rgb(6 182 212)")};
    padding: 10px 16px;
    border-radius: 6px;
    border: 1px solid rgb(6 182 212);
    text-decoration: ${(props) => (props.isActive ? "underline" : "none")};
`;
