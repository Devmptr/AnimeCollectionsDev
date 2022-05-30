import styled from "@emotion/styled";

export const AnimeContainer = styled.div`
    display: grid;
    grid-gap: 20px;
    padding: 20px;
    grid-template-columns: repeat(3, 1fr);
    a {
        text-decoration: none;
    }
    @media (min-width: 768px) {
        grid-template-columns: repeat(10, 1fr);
    }
`;

export const MainContainer = styled.div`
    padding-top: 54px;
    padding-bottom: 100px;
`;

export const ImageAnime = styled.img`
    width: 100%;
    border-radius: 8px;
    filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
        drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
    object-fit: cover;
    min-height: 140px;
    height: 140px;
    @media (min-width: 768px) {
        max-height: 180px;
        height: 180px;
    }
`;

export const TitleAnime = styled.p`
    font-family: "Poppins";
    text-decoration: none;
    padding: 0px;
    margin: 0px;
    color: #2e2e2e;
    font-size: 12px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    max-height: 50px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
`;

export const StatusAnime = styled.span`
    position: absolute;
    background: orange;
    bottom: 0px;
    left: 0;
    width: 100%;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    font-weight: 700;
    color: white;
    text-align: center;
    padding: 2px 0px;
    font-size: 11px;
`;

export const RatingAnime = styled.span`
    position: absolute;
    background-color: rgb(234 88 12);
    right: 0rem;
    top: 0.5rem;
    color: white;
    font-weight: bold;
    padding: 2px 8px;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    font-size: 10px;
`;

export const DetailWrap = styled.div`
    position: relative;
`;

export const Loading = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url("https://i.pinimg.com/originals/8a/69/8f/8a698f09c9c4982662767b1dc116e385.gif");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 300px;
    margin-top: -90px;
`;
