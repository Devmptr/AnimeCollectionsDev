import styled from "@emotion/styled";

export const ImageBanner = styled.img`
    max-width: 100vw;
    width: 100%;
    border-radius: 6px;
    min-height: 125px;
    object-fit: cover;
    max-height: 125px;
    @media (min-width: 768px) {
        max-height: 250px;
    }
`;
export const ImageCover = styled.img`
    position: absolute;
    z-index: 1;
    left: 50%;
    margin-left: -60px;
    bottom: -50%;
    border-radius: 8px;
    border: 2px solid white;
    box-shadow: 0 8px 16px rgb(0 0 0 / 16%) !important;
    width: 120px;
    @media (min-width: 768px) {
        width: 200px;
        left: 10%;
        bottom: -30%;
    }
`;

export const ImageWrapper = styled.div`
    position: relative;
`;

export const DataAnimeWrapper = styled.div`
    padding: 10px;
    @media (min-width: 768px) {
        padding: 1rem;
        border: 1px solid #9b9b9b;
        border-radius: 0.5rem;
        margin: 1rem;
    }
`;

export const ContentWrapper = styled.div`
    margin-top: 100px;
    display: grid;
    grid-template-columns: 30% 1fr;
    @media (min-width: 768px) {
        grid-template-columns:
            150px
            1fr;
        padding: 1rem;
        border: 1px solid #9b9b9b;
        border-radius: 0.5rem;
    }
`;

export const ContentLeft = styled.div`
    font-family: "Poppins";
    font-weight: 700;
    font-size: 13px;
    border-right: 1px solid #9d9d9d;
    margin-right: 10px;
    margin-top: 6px;
    margin-bottom: 6px;
`;

export const ContentRight = styled.div`
    font-family: "Poppins";
    font-weight: 500;
    font-size: 13px;
    margin-left: 10px;
    margin-top: 6px;
    margin-bottom: 6px;
`;

export const ButtonAdd = styled.button`
    box-shadow: inset 0 1px 0 0 rgb(255 255 255 / 20%);
    background-color: rgb(6 182 212);
    border: none;
    border-radius: 6px;
    padding: 10px 16px;
    color: white;
    width: 100%;
    font-size: 14px;
    font-weight: bold;
    margin: 8px 0px;
    cursor: pointer;
`;

export const ButtonClose = styled.button`
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

export const ModalCard = styled.div`
    width: 100%;
    border-bottom: 1px solid #9d9d9d;
    text-align: center;
    margin-bottom: 6px;
    padding-bottom: 6px;
    font-weight: bold;
    font-family: "Poppins";
`;

export const SpanGenre = styled.div`
    background-color: #fed7aa;
    padding: 4px 8px;
    border-radius: 8px;
    -webkit-text-decoration: none;
    text-decoration: none;
    color: #c2410c;
    display: inline;
    margin-right: 8px;
    margin-bottom: 8px;
    a {
        text-decoration: none;
        color: #c2410c;
    }
`;

export const InputCheckbox = styled.div`
    padding: 0.5rem;
    border-radius: 8px;
    border: 1px solid #9b9b9b;
    margin: 8px 0px;
`;

export const SelectInput = styled.div`
    max-height: 30vh;
    overflow: hidden;
    overflow-y: scroll;
`;
export const CollectionWrapper = styled.div`
    display: inline-flex;
    flex-flow: wrap;
`;
