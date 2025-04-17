import style from './ImageCard.module.css'
import { AiFillLike } from "react-icons/ai";

export default function ImageCard({ image, openModal  }) {
    return (
        <div className={style.card_container}>
            <img
                src={image.urls.small}
                alt={image.alt_description}
                className={style.img}
                onClick={() => openModal(image)}
            />
            <div className={style.text_container}>
            <p className={style.text}>
                <AiFillLike className={style.svg} size={18}/>
                Likes:
                {image.likes}
            </p>
            </div>
        </div>
    )
}