import React from 'react';
const moviesListWrap = ({ children, type }) => {
  let rendered = null;
  switch (type) {
    case 'topView':
      rendered = (
        <div className="movies-list-wrap mlw-topview mt20">{children}</div>
      );
      break;
    default:
      rendered = (
        <div className="movies-list-wrap mlw-latestmovie">{children}</div>
      );
  }

  return rendered;
};
export default moviesListWrap;
