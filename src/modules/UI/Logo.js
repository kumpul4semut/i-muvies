import React from 'react';
import { Link } from 'react-router-dom';

const logo = ({ image }) => (
  <div className="header-logo">
    <Link id="logo" style={{ backgroundImage: `url(${image})` }} to="/">
      {null}
    </Link>
  </div>
);
export default logo;
