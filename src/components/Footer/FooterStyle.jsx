import styled from "@emotion/styled";

export const FooterWrap = styled.div`
    background-color: rgb(6 182 212);
    text-align: center;
    bottom: 0;
    position: fixed;
    width: 100vw;
    justify-content: space-around;
    display: flex;
    min-height: 54px;
    @media (min-width: 768px) {
        display: none;
    }
`;

export const FooterItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    svg {
        margin-right: 5px;
    }
`;

export const FooterItemWrap = styled.div`
    color: white;
    width: 50%;
    border-right: ${(props) => (props.right ? "none" : "1px solid white")};
    border-left: ${(props) => (props.left ? "none" : "1px solid white")};
    a {
        color: white;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        font-family: "Poppins", sans-serif;
        font-size: 12px;
    }
`;
