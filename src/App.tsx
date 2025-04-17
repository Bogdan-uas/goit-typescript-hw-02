import './App.module.css'

import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import Loader from './components/Loader/Loader.jsx'
import ImageModal from "./components/ImageModal/ImageModal.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";


import { useState, useEffect } from "react";

import toast, { Toaster } from "react-hot-toast";

import { fetchGalleryPicturesFromTopic } from "./gallery-api.js";

function App() {
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [url, setUrl] = useState("");
  const [alt, setAlt] = useState("");
  const [description, setDescription] = useState("");
  const [isEmpty, setIsEmpty] = useState("");

  useEffect(() => {
    if (query === '') {
      return;
    }
    const handleSearch = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchGalleryPicturesFromTopic(query, page);
        setPictures((prevPictures) => [...prevPictures, ...data.results]);
        setIsVisible(page < data.total_pages)
        console.log(data)
      } catch (error) {
        setError(error);
        toast.error("Whoops, something went wrong! Please try update page...");
      } finally {
        setLoading(false);
      }
    };

    handleSearch();
  }, [query, page]);

  const handleSubmit = (newQuery) => {
    setQuery(`${Date.now()}/${newQuery}`);
    setPictures([]);
    setPage(1);
    setError(false);
    setIsEmpty(false);
    setIsVisible(false);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (object) => {
    setModal(true);
    setUrl(object.urls.regular);
    setAlt(object.alt_description);
    setDescription(object.description);
  };

  const closeModal = () => {
    setModal(false);
    setUrl("");
    setAlt("");
    setDescription("");
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {pictures.length > 0 && (
        <ImageGallery pictures={pictures} openModal={openModal} />
      )}
      {isVisible && !loading && (
        <LoadMoreBtn onClick={loadMore} loading={loading} />
      )}
      {loading && <Loader />}
      {!pictures.length && !isEmpty && <p className='empty-text'>Let's start, type in something!</p>}
      <ImageModal
        url={url}
        alt={alt}
        description={description}
        modalIsOpen={modal}
        closeModal={closeModal}
      />

      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default App
