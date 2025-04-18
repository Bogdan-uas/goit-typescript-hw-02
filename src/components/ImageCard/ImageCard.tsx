import style from './ImageCard.module.css'
import { AiFillLike } from "react-icons/ai";

interface Picture {
  urls: {
    small: string;
  };
  alt_description: string;
  likes: number;
}

interface PicCardProps {
  image: Picture;
  onClick: (image: Picture) => void;
}

const ImageCard: React.FC<PicCardProps> = ({ image, onClick }) => {
    const handleClick = () => {
      onClick(image);
    };
    return (
        <div className={style.card_container}>
            <img
                src={image.urls.small}
                alt={image.alt_description}
                className={style.img}
                onClick={handleClick}
            />
            <div className={style.text_container}>
            <p className={style.text}>
                <AiFillLike className={style.svg} size={18}/>
                <span>Likes: </span>
                {image.likes}
            </p>
            </div>
        </div>
    )
}

export default ImageCard;