import style from './LoadMoreBtn.module.css'

export default function LoadMoreBtn({ onClick }) {
return (
    <button className={style.button} onClick={onClick}>
        Load More
    </button>
);
};

