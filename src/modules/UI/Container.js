import React from 'react';

const container = ({ children, style }) => {
  let rendered = <div className="container">{children}</div>;
  if (style) {
    rendered = (
      <div className="container" style={style}>
        {children}
      </div>
    );
  }
  return rendered;
};
export default container;
