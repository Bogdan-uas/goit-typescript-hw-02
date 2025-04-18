import style from "./ImageModal.module.css"
import Modal from "react-modal";
import { IImage } from "../../App";

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

interface IImageModalProps {
    image: IImage | null;
    isOpen: boolean;
    onRequestClose: () => void;
}

const ImageModal: React.FC<IImageModalProps> = ({
    image,
    isOpen,
    onRequestClose,
}) => {
    if (!image) {
        return null;
    }
return (
    <div>
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
        overlayClassName={style.overlay}
        contentLabel="Example Modal"
        appElement={document.getElementById("root") as HTMLElement}
    >
    <img src={image.urls.regular} alt={image.alt_description} className={style.img} />
    <p className={style.text}>{image.alt_description}</p>
    </Modal>
    </div> 
);
};

export default ImageModal;