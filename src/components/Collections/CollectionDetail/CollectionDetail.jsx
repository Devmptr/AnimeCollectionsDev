import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { SLUGIFY } from "../../../Helpers/StrToSlug";
import {
    CollectionCard,
    CollectionAnimeCard,
    AnimeImage,
    ImageWrapper,
    ContentWrapper
} from "./CollectionDetailStyle";

const CollectionDetail = () => {
    let { collectionSlug } = useParams();
    const [collection, setCollection] = useState(getCollection(collectionSlug));

    return (
        <div>
            {collection.length !== 0 ? (
                <CollectionCard>
                    <p>{collection.collection_name}</p>
                </CollectionCard>
            ) : (
                <div></div>
            )}
            {collection.length !== 0 ? (
                collection.collection_data.map((data) => {
                    return (
                        <CollectionAnimeCard key={data.id}>
                            <ImageWrapper>
                                <AnimeImage
                                    src={data.coverImage.medium}
                                    alt=""
                                    width={72}
                                    height={72}
                                />
                            </ImageWrapper>
                            <ContentWrapper>
                                <Link to={"/anime/detail/" + data.id}>
                                    {data.title.english ?? data.title.native}
                                </Link>
                                <button
                                    onClick={() =>
                                        window.confirm(
                                            "Yakin Hapus " +
                                                data.title.english ??
                                                data.title.native + "?"
                                        )
                                            ? deleteAnime(
                                                  collectionSlug,
                                                  data.id,
                                                  setCollection
                                              )
                                            : null
                                    }
                                >
                                    Remove
                                </button>
                            </ContentWrapper>
                        </CollectionAnimeCard>
                    );
                })
            ) : (
                <div></div>
            )}
        </div>
    );
};

const getCollection = (slug) => {
    let dataCollection = localStorage.getItem("collections");
    let objCollection = JSON.parse(dataCollection);
    let found = objCollection.filter((c) => SLUGIFY(c.collection_name) === slug);
    if (found !== undefined) {
        return found[0];
    }
    return null;
};

const deleteAnime = (slug, id, callback) => {
    let dataCollect = getCollection(slug) ?? null;
    let allCollect = getCollections() ?? [];
    let arrNew = [];

    if (dataCollect !== null) {
        dataCollect.collection_data.forEach((data) => {
            if (data.id !== id) {
                arrNew.push(data);
            }
        });
    }

    allCollect.map((o, i) => {
        if (o.collection_name === dataCollect.collection_name) {
            allCollect[i].collection_data = arrNew;
            callback(allCollect[i]);
            return true;
        }
        return false;
    });

    localStorage.setItem("collections", JSON.stringify(allCollect));
};

const getCollections = () => {
    let dataCollection = localStorage.getItem("collections");
    return JSON.parse(dataCollection);
};

export default CollectionDetail;
