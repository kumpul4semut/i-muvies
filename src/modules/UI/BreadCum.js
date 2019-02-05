import React from 'react';

const breadCum = ({ children }) => (
  <div id="bread">
    <ol className="breadcrumb">{children}</ol>
  </div>
);

export default breadCum;
