import style from './ImageGallery.module.css'
import ImageCard from '../ImageCard/ImageCard.js'
import { IImage } from "../../App";

interface ImageGalleryProps {
    pictures: IImage[];
    onImageClick: (image: IImage) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
    pictures,
    onImageClick,
}) => {
    return (
    <ul className={style.gallery}>
        {Array.isArray(pictures) &&
        pictures.map((pic) => (
            <li key={pic.id} className={style.item}>
                <ImageCard image={pic} onClick={() => onImageClick(pic)} />
            </li>
        ))}
    </ul>
    )
}

export default ImageGallery;