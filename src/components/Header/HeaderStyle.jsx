import styled from "@emotion/styled";

export const HeaderWrap = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto;
    column-gap: 8px;
    min-height: 52px;
    max-width: 500px;
    z-index: 40;
    width: 100%;
    background-color: rgb(6 182 212);
    outline: initial;
    position: fixed;
    padding: 0px 10px;
    box-shadow: 0 8px 16px rgb(0 0 0 / 6%) !important;
    @media (min-width: 768px) {
        max-width: 100%;
    }
`;

export const ButtonHeader = styled.button`
    color: rgb(6 182 212);
    background: white;
    border: none;
    width: 42px;
    height: 42px;
    border-radius: 8px;
`;

export const TitleHeader = styled.p`
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-weight: 800;
    vertical-align: middle;
    color: white;
    margin: 0px;
    line-height: initial;
`;

export const TitleWrap = styled.div`
    width: 100%;
`;

export const HeaderMenu = styled.div`
    @media (min-width: 768px) {
        display: grid;
    }
    display: none;
    grid-template-columns: 100px 100px;
    grid-column-end: none;
    margin: 10px;
    grid-gap: 20px;
    a {
        text-decoration: none;
        color: white;
    }
    a:-webkit-any-link {
        color: white;
    }
`;

export const HeaderItem = styled.div`
    justify-content: start;
    display: flex;
    place-items: center;
    svg {
        margin-right: 8px;
    }
`;
