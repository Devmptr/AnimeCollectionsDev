import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { useParams, Link } from "react-router-dom";

import { GET_DETAIL_ANIME } from "../../../GraphQl/Queries";
import { SLUGIFY } from "../../../Helpers/StrToSlug";
import {
    ImageBanner,
    ImageCover,
    ImageWrapper,
    DataAnimeWrapper,
    ContentWrapper,
    ContentLeft,
    ButtonAdd,
    SpanGenre,
    ModalCard,
    InputCheckbox,
    SelectInput,
    CollectionWrapper,
} from "./AnimeDetailStyle";
import { ContentModal } from "./Modal/AnimeDetailModalStyle";
import AnimeDetailModal from "./Modal/AnimeDetailModal";
import { Loading } from "../../Home/HomeStyle";
import { InputGroup, InputForm } from "../../Collections/ColelctionStyle";

const AnimeDetail = () => {
    const [showModal, setShowModal] = useState(false);
    const [anime, setAnime] = useState([]);
    const [selectCollect, setSelectCollect] = useState([]);
    const [namaCollection, setNamaCollection] = useState("");
    const [collection, setCollection] = useState([]);
    let { animeId } = useParams();

    const { loading, error, data } = useQuery(GET_DETAIL_ANIME, {
        variables: { id: animeId },
    });

    useEffect(() => {
        if (data) {
            setAnime(data.Page.media[0]);
        }
    }, [data]);

    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <div>Error</div>;
    }

    return (
        <div>
            {anime.length !== 0 ? (
                <DataAnimeWrapper>
                    <ImageWrapper>
                        <ImageBanner src={anime.bannerImage} alt="" width={"100%"} height={"100%"}/>
                        <ImageCover src={anime.coverImage.medium} alt="" width={"100%"}/>
                    </ImageWrapper>
                    <ContentWrapper>
                        <ContentLeft key={"labelJudul"}>Judul</ContentLeft>
                        <div key={"dataJudul"}>
                            {anime.title.english ?? anime.title.native}
                        </div>
                        <ContentLeft key={"labelCollection"}>
                            Collections
                        </ContentLeft>
                        <CollectionWrapper key={"dataCollection"}>
                            {getListInCollection(anime.id)}
                        </CollectionWrapper>
                        <ContentLeft key={"labelGenre"}>Genre</ContentLeft>
                        <ul key={"dataGenre"}>
                            {anime.genres.map((genre) => {
                                let slug = SLUGIFY(genre);
                                return <li key={"genre_" + slug}>{genre}</li>;
                            })}
                        </ul>
                        <ContentLeft key={"labelEpisode"}>Episode</ContentLeft>
                        <div key={"dataEpisode"}>{anime.episodes}</div>
                        <ContentLeft key={"labelDeskripsi"}>
                            Deskripsi
                        </ContentLeft>
                        <div key={"dataDeskripsi"}>{anime.description}</div>
                    </ContentWrapper>
                    <ButtonAdd
                        onClick={() => {
                            setShowModal(true);
                            setCollection(getCollect());
                        }}
                    >
                        Add to Collection
                    </ButtonAdd>
                </DataAnimeWrapper>
            ) : (
                <div>Not Found</div>
            )}

            <AnimeDetailModal
                show={showModal}
                handleClose={() => {
                    setShowModal(false);
                }}
            >
                <ContentModal>
                    <div>
                        <ModalCard>
                            {collection.length !== 0
                                ? "Select Collection"
                                : "You dont Have Collection"}
                        </ModalCard>
                        {collection.length !== 0 ? (
                            <SelectInput>
                                {collection.map((c) => {
                                    var slug = SLUGIFY(c.collection_name);
                                    return (
                                        <InputCheckbox key={slug}>
                                            <input
                                                type="checkbox"
                                                id={slug}
                                                name="collection[]"
                                                value={c.collection_name}
                                                onChange={() =>
                                                    setSelected(
                                                        setSelectCollect
                                                    )
                                                }
                                            />
                                            <label htmlFor={slug}>
                                                {c.collection_name}
                                            </label>
                                        </InputCheckbox>
                                    );
                                })}
                            </SelectInput>
                        ) : (
                            <InputGroup>
                                <label htmlFor="collection_name">
                                    Buat Collection Baru
                                </label>
                                <InputForm
                                    id="collection_name"
                                    type="text"
                                    value={namaCollection}
                                    name="collection_name"
                                    placeholder="Collection Name"
                                    onChange={(e) =>
                                        setNamaCollection(e.target.value)
                                    }
                                />
                            </InputGroup>
                        )}
                    </div>
                    <ButtonAdd
                        onClick={() => {
                            collection.length !== 0
                                ? addToCollection(selectCollect, anime)
                                : saveCollection(namaCollection, anime);
                            setShowModal(false);
                        }}
                    >
                        Submit
                    </ButtonAdd>
                </ContentModal>
            </AnimeDetailModal>
        </div>
    );
};

const saveCollection = (nama, dataAnime) => {
    let arrCollect = getCollect() ?? [];

    arrCollect.push({ collection_name: nama, collection_data: [] });

    let isNotExists = validateCollection(nama);

    if (isNotExists) {
        localStorage.setItem("collections", JSON.stringify(arrCollect));
        addToCollection([nama], dataAnime);
    } else {
        alert("Collection sudah Ada");
    }
};

const validateCollection = (namaCollection) => {
    let dataCollection = localStorage.getItem("collections");
    let objectCollection = JSON.parse(dataCollection);
    let resp = true;
    if (objectCollection !== null) {
        objectCollection.forEach((data) => {
            if (data.collection_name === namaCollection) {
                resp = false;
                return;
            }
        });
    }

    return resp;
};

const setSelected = (callback) => {
    let newCollect = [];
    let markedCheckbox = document.querySelectorAll(
        'input[name="collection[]"]:checked'
    );
    for (let mark of markedCheckbox) {
        newCollect.push(mark.value);
    }
    callback(newCollect);
};

const addToCollection = (arrSelect, dataAnime) => {
    let arrCollect = getCollect();
    for (let select of arrSelect) {
        arrCollect.map((o, i) => {
            if (o.collection_name === select) {
                o.collection_data.push(dataAnime);
                return true;
            }
            return false;
        });
    }

    localStorage.setItem("collections", JSON.stringify(arrCollect));
};

const getCollect = () => {
    let collections = JSON.parse(localStorage.getItem("collections")) ?? [];
    return collections;
};

const getListInCollection = (id) => {
    let collections = getCollect();

    let list = collections.map((collect) => {
        let isSet = false;
        if (collect.collection_data.length !== 0) {
            isSet = collect.collection_data.find((el) => {
                if (el.id === id) {
                    return true;
                }
                return false;
            });
        }
        if (isSet) {
            return (
                <SpanGenre key={"link_" + SLUGIFY(collect.collection_name)}>
                    <Link
                        to={
                            "/collection/detail/" +
                            SLUGIFY(collect.collection_name)
                        }
                    >
                        {collect.collection_name}
                    </Link>
                </SpanGenre>
            );
        }
        return null;
    });

    return list;
};

export default AnimeDetail;
