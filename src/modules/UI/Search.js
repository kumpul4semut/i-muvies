import React from 'react';

const search = ({ active, searchSubmit, handleChange, children }) => {
  return (
    <div id="search" className={active ? 'active' : ''}>
      <div className="search-content">
        <input
          maxLength="50"
          autoComplete="off"
          name="keyword"
          type="text"
          aria-label="search-movies"
          className="form-control search-input"
          placeholder="Judul, IMDb"
          onChange={e => handleChange(e)}
        />
        <div onClick={searchSubmit} className="search-submit" title="Search">
          <i className="fa fa-search" />
        </div>
        {children}
      </div>
    </div>
  );
};
export default search;
