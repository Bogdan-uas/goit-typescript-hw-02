import style from './ImageGallery.module.css'
import ImageCard from '../ImageCard/ImageCard.jsx'


export default function ImageGallery({ pictures, openModal }) {
    return (
    <ul className={style.gallery}>
        {pictures.map((pic) => {
            return (
                <li key={pic.id} className={style.item}>
                    <ImageCard image={pic} openModal={openModal} />
                </li>
            )
        })}
    </ul>
    )
}