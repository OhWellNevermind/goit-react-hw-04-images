import { StyledImg, StyledListItem } from './ImageGallery.styled';
import PropTypes from 'prop-types';

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

ImageGalleryItem.propTypes = {
  image: PropTypes.object,
};
