import React from 'react';
import { Link } from 'react-router-dom';
const disabled = {
  pointerEvents: 'none',
  cursor: 'default',
  textDecoration: 'none'
};
const navtabItem = ({ isActive, onActiveTab, content }) => {
  let rendered = (
    <li
      className={isActive ? 'active' : ''}
      onClick={onActiveTab}
      style={isActive ? disabled : null}
    >
      <Link className="category-nav" to="#!">
        {content}
      </Link>
    </li>
  );

  return rendered;
};
export default navtabItem;
