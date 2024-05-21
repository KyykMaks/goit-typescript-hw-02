import React, { useState, useEffect } from 'react';
import { fetchAPI, UnsplashResponse } from './fetch-api';
import { SearchBar } from './SearchBar/SearchBar';
import { Loader } from './Loader/Loader';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';
import { Toaster } from 'react-hot-toast';
import css from './App.module.css';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageModal from './ImageModal/ImageModal';

interface AppProps {}

const App: React.FC<AppProps> = () => {
    const [topic, setTopic] = useState<string>('');
    const [warning, setWarning] = useState<string>('');
    const [totalPage, setTotalPage] = useState<number>(0);
    const [page, setPage] = useState<number>(1);
    const [images, setImages] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<any | null>(null);

    const handleSearch = async () => {
        try {
            setLoading(true);
            const data: UnsplashResponse = await fetchAPI(topic, page);
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

    const handleInputChange = (newTopic: string) => {
        setTopic(newTopic);
        setPage(1);
        setWarning('');
        setError(false);
    };

    const openModal = (image: any) => {
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
export default App;