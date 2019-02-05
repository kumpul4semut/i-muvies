import React from 'react';
import { Link } from 'react-router-dom';

const moviesListItem = ({
  title,
  img,

  rating,

  href
}) => (
  <div className="ml-item">
    <Link to={href} className="ml-mask jt" title={title}>
      <div className="rating-durasi">
        <span className="mli-rating">
          <i className="fa fa-star mr5" />
          {rating}
        </span>
      </div>

      <img
        className="lazy thumb mli-thumb"
        alt={title}
        src={img}
        style={{ display: 'inline-block' }}
      />
      <div className="mli-info">
        <h2>{title}</h2>
      </div>
    </Link>
  </div>
);
export default moviesListItem;
