import React from 'react';
import { Link } from 'react-router-dom';
const mdescBodyItem = ({ title, data, children }) => {
  return (
    <p>
      <strong>{title} : </strong>
      {children ? children : null}
      {data && data.length > 0
        ? data.map((item, i) => (
            <span key={i}>
              <Link to={`/${title.toLowerCase()}/${item.id}`}>
                <span itemProp={title.toLowerCase()}> {item.name}</span>
              </Link>
            </span>
          ))
        : null}
    </p>
  );
};
export default mdescBodyItem;
