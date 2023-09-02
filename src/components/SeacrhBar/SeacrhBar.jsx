import { Input, Button } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.css';

export const SeacrhBar = ({ onSubmit }) => {
  return (
    <header className="searchbar w-100 d-flex justify-content-center mb-3">
      <form onSubmit={onSubmit} className="form d-flex ">
        <Input
          name="query"
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images"
        />
        <button variant="contained" type="submit" className="ms-3">
          <span className="button-label">Search</span>
        </button>
      </form>
    </header>
  );
};
