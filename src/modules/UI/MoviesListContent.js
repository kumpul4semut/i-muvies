import React from 'react';
const moviesListContent = ({ children }) => (
  <div className="tab-content">
    <div className="movies-list movies-list-full tab-pane active">
      {children}
    </div>
  </div>
);
export default moviesListContent;
