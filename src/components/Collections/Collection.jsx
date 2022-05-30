import { useEffect, useState } from "react";
import CollectionCard from "./Card/CollectionCard";
import CollectionModal from "./Modal/CollectionModal";
import { ContentModal } from "./Modal/CollectionModalStyle";
import { ButtonCreate, InputGroup, ButtonSubmit,InputForm } from "./ColelctionStyle";

const Collection = () => {
    const [showModal, setShowModal] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [namaCollection, setNamaCollection] = useState("");
    const [editNamaCollection, setEditNamaCollection] = useState("");
    const [dataCollection, setDataCollection] = useState(getCollection() ?? []);

    useEffect(() => {
        if (showModal) {
            if (!isEdit) {
                setNamaCollection("");
            }
        }
    }, [showModal, isEdit]);

    return (
        <div>
            <ButtonCreate onClick={() => setShowModal(true)} top>
                Create New Collection
            </ButtonCreate>
            <CollectionModal
                show={showModal}
                handleClose={() => setShowModal(false)}
            >
                <ContentModal>
                    <InputGroup>
                        <label htmlFor="collection_name">
                            Input Nama Collection
                        </label>
                        <InputForm
                            id="collection_name"
                            type="text"
                            value={namaCollection}
                            name="collection_name"
                            placeholder="Collection Name"
                            onChange={(e) => setNamaCollection(e.target.value)}
                        />
                    </InputGroup>
                    <ButtonSubmit
                        onClick={() => {
                            isEdit
                                ? editCollection(
                                      editNamaCollection,
                                      namaCollection,
                                      setDataCollection
                                  )
                                : saveCollection(
                                      namaCollection,
                                      setDataCollection
                                  );
                            setShowModal(false);
                        }}
                    >
                        Submit
                    </ButtonSubmit>
                </ContentModal>
            </CollectionModal>
            <div>
                {dataCollection ? (
                    <CollectionCard
                        data={dataCollection}
                        deleteHandler={(nama) =>
                            deleteCollection(nama, setDataCollection)
                        }
                        editHandler={(nama) => {
                            setIsEdit(true);
                            setNamaCollection(nama);
                            setEditNamaCollection(nama);
                            setShowModal(true);
                        }}
                    />
                ) : null}
            </div>
        </div>
    );
};

const editCollection = (oldNama, newNama, callback) => {
    let arrCollect = getCollection() ?? [];

    let obj = arrCollect.find((o, i) => {
        if (o.collection_name === oldNama) {
            arrCollect[i].collection_name = newNama;
            return true;
        }
        return false;
    });

    if (obj) {
        localStorage.setItem("collections", JSON.stringify(arrCollect));
        callback(arrCollect);
    }
};

const deleteCollection = (nama, callback) => {
    let arrCollect = getCollection() ?? [];
    let arrNew = [];

    if (arrCollect !== null) {
        arrCollect.forEach((data) => {
            if (data.collection_name !== nama) {
                arrNew.push(data);
            }
        });
    }

    localStorage.setItem("collections", JSON.stringify(arrNew));

    callback(arrNew);
};

const saveCollection = (namaCollection, callback) => {
    let arrCollect = getCollection() ?? [];

    arrCollect.push({ collection_name: namaCollection, collection_data: [] });

    let isNotExists = validateCollection(namaCollection);

    if (isNotExists) {
        localStorage.setItem("collections", JSON.stringify(arrCollect));
        callback(arrCollect);
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

const getCollection = () => {
    let dataCollection = localStorage.getItem("collections");
    return JSON.parse(dataCollection);
};

export default Collection;
