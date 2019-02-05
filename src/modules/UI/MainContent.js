import React from 'react';
const mainContent = ({ children, style, detail, category }) => {
  let rendered = <div className="main-content">{children}</div>;

  if (style) {
    rendered = (
      <div className="main-content" style={{ style }}>
        {children}
      </div>
    );
  }
  if (detail === true) {
    rendered = (
      <div
        className="main-content main-detail"
        style={{ maxWidth: '1079px', padding: 0 }}
      >
        {children}
      </div>
    );
  }
  if (category === true) {
    rendered = <div className="main-content main-category">{children}</div>;
  }
  return rendered;
};
export default mainContent;
