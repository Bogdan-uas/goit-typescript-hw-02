import React, { useEffect, useState } from "react";
import css from "./App.module.css";
import { requestImagesByQuery } from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

export interface IImage {
    id: string;
    urls: {
        small: string;
        regular: string;
    };
    alt_description: string;
    likes: number;
}

interface Data {
    results: IImage[];
}

const App: React.FC = () => {
    const [pictures, setPictures] = useState<IImage[] | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [query, setQuery] = useState<string>("");
    const [page, setPage] = useState<number>(1);
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<IImage | null>(null);

useEffect(() => {
    const fetchImagesByQuery = async () => {
        try {
        setLoading(true);
        const data: Data = await requestImagesByQuery(query, page);
        setPictures((prevPictures) => {
        if (page === 1) {
            return data.results;
        } else {
            return prevPictures ? [...prevPictures, ...data.results] : data.results;
        }
        });
        setError(false);
    } catch (error) {
        setError(true);
    } finally {
        setLoading(false);
    }
    };

    if (query.length > 0) {
        fetchImagesByQuery();
    } else {
        setPictures(null);
    }
}, [query, page]);

const onSetSearchQuery = (searchQuery: string) => {
    setQuery(searchQuery);
    setPage(1);
};

const handleMoreImages = async () => {
    setPage((prevPage) => prevPage + 1);
};

const openModal = (image: IImage) => {
    setModalIsOpen(true);
    setSelectedImage(image);
};

const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
};

return (
    <div className={css.container}>
    <SearchBar onSubmit={onSetSearchQuery} />
        {error && <ErrorMessage />}
        {pictures && <ImageGallery pictures={pictures} onImageClick={openModal} />}
        {loading && <Loader />}
        {pictures && <LoadMoreBtn onClick={handleMoreImages} />}
    <ImageModal
        isOpen={!!selectedImage}
        image={selectedImage}
        onRequestClose={closeModal}
    />
    </div>
);
};

export default App;
