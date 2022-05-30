import styled from "@emotion/styled";

export const CollectionCard = styled.div`
    border: 1px solid #9b9b9b;
    margin: 1rem;
    padding: 0rem 0.5rem;
    border-radius: 8px;
`;

export const CollectionAnimeCard = styled.div`
    border: 1px solid #9b9b9b;
    margin: 1rem;
    padding: 0.5rem;
    border-radius: 8px;
    display: flex;
    justify-content: start;
    align-items: center;
`;

export const AnimeImage = styled.img`
    border-radius: 8px;
`;

export const ImageWrapper = styled.div``;

export const ContentWrapper = styled.div`
    display: flex;
    margin-left: 0.5rem;
    justify-content: space-between;
    width: 100%;
    a {
        color: #2e2e2e;
        font-family: "Poppins";
        font-weight: 800;
        font-size: 12px;
        text-decoration: none;
    }
    button {
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
    }
`;
