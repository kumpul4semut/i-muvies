import React from 'react';

const menu = ({ children, active }) => (
  <div id="menu" className={active}>
    <ul className="top-menu">{children}</ul>
    <div className="clearfix" />
  </div>
);
export default menu;
