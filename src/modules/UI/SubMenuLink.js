import React from 'react';
import { Link } from 'react-router-dom';
const subMenuLink = ({ children, href }) => (
  <li>
    <Link to={href}>{children}</Link>
  </li>
);
export default subMenuLink;
