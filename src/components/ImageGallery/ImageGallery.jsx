import { ImageGalleryItem } from './ImageGalleryItem';
import { StyledList } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images }) => {
  console.log(images);
  return (
    <StyledList className="gallery">
      {images.map(image => {
        return <ImageGalleryItem key={image.id} image={image} />;
      })}
    </StyledList>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};
