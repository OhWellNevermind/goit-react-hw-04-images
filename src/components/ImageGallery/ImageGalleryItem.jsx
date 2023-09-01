import { StyledImg, StyledListItem } from './ImageGallery.styled';
export const ImageGalleryItem = ({ image }) => {
  return (
    <StyledListItem className="gallery-item">
      <StyledImg
        small={image.webformatURL}
        large={image.largeImageURL}
        alt={image.tags}
      />
    </StyledListItem>
  );
};
