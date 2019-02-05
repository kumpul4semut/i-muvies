import React from 'react';
const mdescBody = ({ children, img }) => (
  <div className="mvic-desc">
    <div
      className="thumb mvic-thumb"
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w780${img})` }}
    >
      <meta
        itemProp="image"
        content={`https://image.tmdb.org/t/p/w780${img}`}
      />
    </div>
    <div className="mvic-info">{children}</div>
    <div className="clearfix" />
    <div id="mv-keywords" style={{ display: 'none' }} />
  </div>
);
export default mdescBody;
