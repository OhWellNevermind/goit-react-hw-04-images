import { Button } from '@mui/material';
import PropTypes from 'prop-types';

export const LoadMoreButton = ({ onLoadMore }) => {
  return (
    <Button variant="outlined" onClick={onLoadMore} type="button">
      Load more
    </Button>
  );
};

LoadMoreButton.propTypes = {
  onLoadMore: PropTypes.func,
};
