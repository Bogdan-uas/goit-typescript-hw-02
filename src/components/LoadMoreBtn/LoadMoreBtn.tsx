import style from './LoadMoreBtn.module.css'

interface ILoadMoreBtnProps {
    onClick: () => void;
}

const LoadMoreBtn: React.FC<ILoadMoreBtnProps> = ({ onClick }) => {
return (
    <button className={style.button} type='button' onClick={onClick}>
        Load More
    </button>
);
};

export default LoadMoreBtn;