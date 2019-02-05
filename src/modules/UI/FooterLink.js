import React from 'react';
import { Link } from 'react-router-dom';
const footerLink = ({ href, children }) => (
  <li>
    <Link to={href} title={children}>
      {children}
    </Link>
  </li>
);

export default footerLink;
