import style from "./ImageModal.module.css"
import Modal from "react-modal";

const customStyles = {
content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxHeight: "600px",
},
};

Modal.setAppElement("#root");

export default function ImageModal({ url, alt, description, modalIsOpen, closeModal }) {
return (
    <div>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
    >
    <img src={url} alt={alt} className={style.img} />
    <p className={style.text}>{description}</p>
    </Modal>
    </div> 
);
};