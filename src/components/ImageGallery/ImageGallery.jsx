import { nanoid } from 'nanoid';
import { ImageGalleryItem } from './ImageGalleryItem';
import { StyledList } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <StyledList className="gallery">
      {images.map(image => {
        return <ImageGalleryItem key={nanoid()} image={image} />;
      })}
    </StyledList>
  );
};
