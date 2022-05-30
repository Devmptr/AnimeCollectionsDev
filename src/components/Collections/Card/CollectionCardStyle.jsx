import styled from "@emotion/styled";

export const CardBody = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    background: white;
    padding: 10px;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: 1px solid #9d9d9d;
    border-radius: 6px;
    box-shadow: 0 8px 16px rgb(0 0 0 / 6%) !important;
    a {
        display: flex;
        margin: 8px;
    }
`;

export const ImageCollection = styled.img`
    object-fit: cover;
    min-width: 72px;
    min-height: 72px;
    max-width: 72px;
    max-height: 72px;
    border-radius: 10px;
`;

export const TitleCollection = styled.p`
    padding: 0px 10px;
    width: 100%;
    padding: 0px 10px;
    width: 100%;
    font-size: 16px !important;
    color: #2e2e2e;
    text-decoration: none;
    font-weight: 600;
`;

export const CollectionWrapper = styled.div`
    display: grid;
    grid-gap: 20px;
    padding: 20px;
    grid-template-columns: repeat(1, 1fr);
    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;
