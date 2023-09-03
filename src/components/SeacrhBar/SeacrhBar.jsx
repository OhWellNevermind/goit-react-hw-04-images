import { Input } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';

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
        <button
          variant="contained"
          type="submit"
          className=" d-flex justify-content-center align-items-center  ms-3 btn btn-primary  "
        >
          <span className="button-label">Search</span>
        </button>
      </form>
    </header>
  );
};

SeacrhBar.propTypes = {
  onSubmit: PropTypes.func,
};
