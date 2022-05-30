import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import { LOAD_INDEX } from "../../GraphQl/Queries";
import {
    AnimeContainer,
    ImageAnime,
    TitleAnime,
    RatingAnime,
    StatusAnime,
    DetailWrap,
    Loading,
} from "./HomeStyle";
import HomePagination from "./HomePagination/HomePagination";

const Home = () => {
    const [animes, setAnimes] = useState([]);
    const [pagination, setPagination] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(12);
    const [screenWidth] = useState(window.innerWidth);

    const { loading, error, data } = useQuery(LOAD_INDEX, { 
        variables: { page: currentPage, perPage: perPage },
    });

    useEffect(() => {
        if (data) {
            setAnimes(data.Page.media);
            setPagination(data.Page.pageInfo);
        }
    }, [data]);

    useEffect(() => {
        if (screenWidth >= 768) {
            setPerPage(30);
        } else {
            setPerPage(12);
        }
    }, [screenWidth]);

    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <div>Error</div>;
    }

    return (
        <div>
            <AnimeContainer>
                {animes ? (
                    animes.map((val) => {
                        return (
                            <Link
                                key={"anime" + val.id}
                                to={"/anime/detail/" + val.id}
                            >
                                <DetailWrap>
                                    <ImageAnime
                                        src={val.coverImage.medium}
                                        alt=""
                                    />
                                    <RatingAnime>
                                        {val.averageScore}
                                    </RatingAnime>
                                    <StatusAnime>{val.status}</StatusAnime>
                                </DetailWrap>
                                <TitleAnime>
                                    {val.title.english ?? val.title.romaji}
                                </TitleAnime>
                            </Link>
                        );
                    })
                ) : (
                    <div>Data not Found</div>
                )}
            </AnimeContainer>
            {pagination.length !== 0 ? (
                <HomePagination
                    currentPage={currentPage}
                    totalCount={pagination.length !== 0 ? pagination.total : 0}
                    pageSize={pagination.length !== 0 ? pagination.perPage : 0}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            ) : (
                <div>No Pagination</div>
            )}
        </div>
    );
};

export default Home;
