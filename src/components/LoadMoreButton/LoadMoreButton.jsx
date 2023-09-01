import { Button } from '@mui/material';

export const LoadMoreButton = ({ onLoadMore }) => {
  return (
    <Button variant="outlined" onClick={onLoadMore} type="button">
      Load more
    </Button>
  );
};
