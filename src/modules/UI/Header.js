import React from 'react';
const Header = ({ children, position }) => (
  <header
    style={{
      position: `${position}`,
      top: '0px',
      backgroundColor: `rgb(255, 255, 255)`
    }}
  >
    {children}
  </header>
);
export default Header;
