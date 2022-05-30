import {
    CollectionWrapper,
    CardBody,
    ImageCollection,
    TitleCollection,
} from "./CollectionCardStyle";
import { Link } from "react-router-dom";
import { SLUGIFY } from "../../../Helpers/StrToSlug";
import { ActionWrapper, ButtonCreate, ButtonDelete } from "../../Collections/ColelctionStyle";

const CollectionCard = ({ data, deleteHandler, editHandler }) => {
    return (
        <CollectionWrapper>
            {data.map((e) => {
                return (
                    <CardBody key={e.collection_name}>
                        <Link
                            to={
                                "/collection/detail/" +
                                SLUGIFY(e.collection_name)
                            }
                        >
                            <ImageCollection
                                src={
                                    e.collection_data.length !== 0
                                        ? e.collection_data[0].coverImage.medium
                                        : "https://via.placeholder.com/300.png"
                                }
                                alt=""
                            />
                            <TitleCollection>
                                {e.collection_name}
                            </TitleCollection>
                        </Link>
                        <ActionWrapper>
                            <ButtonCreate
                                onClick={() => editHandler(e.collection_name)}
                            >
                                Edit
                            </ButtonCreate>
                            <ButtonDelete
                                onClick={() =>
                                    window.confirm(
                                        "Yakin Hapus " + e.collection_name + "?"
                                    )
                                        ? deleteHandler(e.collection_name)
                                        : null
                                }
                            >
                                Delete
                            </ButtonDelete>
                        </ActionWrapper>
                    </CardBody>
                );
            })}
        </CollectionWrapper>
    );
};

export default CollectionCard;
