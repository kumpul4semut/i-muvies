import React from 'react';
const footerTitle = ({ title, children }) => (
  <div className="col-md-2 col-sm-3 col-xs-6 hidden-xs">
    <p className="title_footer">{title}</p>
    <ul>{children}</ul>
  </div>
);
export default footerTitle;
