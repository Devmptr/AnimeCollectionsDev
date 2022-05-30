import styled from "@emotion/styled";

export const CloseModal = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    box-shadow: inset 0 1px 0 0 rgb(255 255 255 / 20%);
    background-color: rgb(212 6 6);
    border: none;
    border-radius: 6px;
    padding: 10px 16px;
    color: white;
    font-size: 14px;
    font-weight: bold;
    margin: 8px 0px;
    top: 4rem;
    right: 1rem;
    cursor: pointer;
`;

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 9;
    display: ${(props) => (props.isShow ? "block" : "none")};
    section {
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const ContentModal = styled.div`
    width: 75vw !important;
    height: auto !important;
    background: white;
    padding: 2rem 1rem;
    display: block !important;
    border-radius: 8px;
`;
