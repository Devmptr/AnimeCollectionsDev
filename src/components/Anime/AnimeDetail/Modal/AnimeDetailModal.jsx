import React from "react";
import { Modal, CloseModal } from "./AnimeDetailModalStyle";

const AnimeDetailModal = ({ handleClose, show, children }) => {
    return (
        <Modal isShow={show}>
            <section>
                <div>
                    {children}
                </div>
                <CloseModal onClick={handleClose}>Close</CloseModal>
            </section>
        </Modal>
    );
};

export default AnimeDetailModal;
