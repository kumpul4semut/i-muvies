import React from 'react';
import { Link } from 'react-router-dom';
const moviesListTitle = ({ title, href, children, rightTitle }) => (
  <div className="ml-title">
    <span className="pull-left">
      {title}
      <i className="fa fa-chevron-right ml10" />
    </span>
    {rightTitle === true ? (
      <Link
        to={href}
        id="lihatutama"
        className="pull-right cat-more"
        title={title}
      >
        Lihat Lebih{' '}
      </Link>
    ) : null}

    {children}
    <div className="clearfix" />
  </div>
);
export default moviesListTitle;
