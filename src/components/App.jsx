import { SeacrhBar } from './SeacrhBar/SeacrhBar';
import { fetchImages } from 'api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreButton } from './LoadMoreButton/LoadMoreButton';
import toast, { Toaster } from 'react-hot-toast';
import { ScaleLoader } from 'react-spinners';
import { StyledContainer } from './Container.styled';
import { useEffect, useState } from 'react';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isMoreImages, setIsMoreImages] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = evt => {
    evt.preventDefault();
    setQuery(`${Date.now()}/${evt.target.elements.query.value.trim()}`);
    setImages([]);
    setPage(1);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setError(false);
        setIsMoreImages(false);

        if (!query) {
          return;
        }

        const { fetchedImages, totalHits } = await fetchImages(
          query.split('/')[1],
          page
        );

        if (!fetchedImages.length) {
          setIsMoreImages(false);
          toast('There is no images for query like that.');
          return;
        }
        //react-hooks/exhaustive-deps
        setImages(images => [...images, ...fetchedImages]);
        setIsMoreImages(page === Math.ceil(totalHits / 12) ? false : true);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        toast.error('Oops there is an error ocurred! Try to reload the page.');
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [query, page]);

  const onLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <StyledContainer className="py-3">
      <SeacrhBar onSubmit={onSubmit} />
      <ScaleLoader color="#36d7b7" loading={isLoading} />
      {!error && (
        <>
          <ImageGallery images={images} />
          {isMoreImages && <LoadMoreButton onLoadMore={onLoadMore} />}
        </>
      )}
      <Toaster position="top-right" />
    </StyledContainer>
  );
};
