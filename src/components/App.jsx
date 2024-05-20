import  { useState, useEffect } from 'react';
import { fetchAPI } from './fetch-api'
import { SearchBar } from './SearchBar/SearchBar';
import { Loader } from './Loader/Loader';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';
import { ImageModal } from './ImageModal/ImageModal';
import { Toaster } from 'react-hot-toast';
import css from './App.module.css';

export const App = () => {
  const [topic, setTopic] = useState('');
  const [warning, setWarning] = useState('');
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const data = await fetchAPI(topic, page);
      if (data.results.length === 0) {
        setWarning('No results found');
        return;
      }
      setWarning('');
      if (page === 1) {
        setImages(data.results);
      } else {
        setImages(prevImages => [...prevImages, ...data.results]);
      }
      setTotalPage(data.total_pages);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (topic.trim() || page > 1) {
      handleSearch();
    }
  }, [topic, page]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleInputChange = newTopic => {
    setTopic(newTopic);
    setPage(1);
    setWarning('');
    setError(false);
  };

  const openModal = image => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSearch={handleInputChange} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {warning && <div className={css.warning}>{warning}</div>}
      {images.length > 0 && <ImageGallery items={images} onImageClick={openModal}/>}
      <ImageModal isOpen={!!selectedImage} image={selectedImage} onRequestClose={closeModal} />
      <div className={css.centered}>
        {page < totalPage && <LoadMoreBtn onClick={loadMore} />}
      </div>
      <Toaster />
    </div>
  );
};