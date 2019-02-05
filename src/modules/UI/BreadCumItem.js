import React from 'react';
import { Link } from 'react-router-dom';

const breadCumItem = ({ active, itemProps, href, name }) => {
  let defaultItem = (
    <li>
      <Link to={href}>{name}</Link>
    </li>
  );
  if (itemProps === true) {
    defaultItem = (
      <li itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb">
        <Link itemprop="/" to={href}>
          <span itemprop="title" style={{ display: 'none' }}>
            {name}
          </span>
          <span>{name}</span>
        </Link>
      </li>
    );
  }
  if (active === true) {
    defaultItem = (
      <li className="active">
        <h1 style={{ fontSize: 'medium', display: 'inline' }}>{name}</h1>
      </li>
    );
  }
  return defaultItem;
};

export default breadCumItem;
