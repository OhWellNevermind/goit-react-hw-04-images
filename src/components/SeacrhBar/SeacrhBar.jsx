export const SeacrhBar = ({ onSubmit }) => {
  return (
    <header className="searchbar">
      <form onSubmit={onSubmit} className="form">
        <input
          name="query"
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>
      </form>
    </header>
  );
};
