import React from 'react';
import { Link } from 'react-router-dom';
const styles = {
  moto: {
    display: 'inline-block'
  },
  text: {
    opacity: 0,
    position: 'absolute',
    maxHeight: '50px',
    overflow: 'hidden'
  }
};
const footerCopyRight = ({ logo, moto = [], children }) => (
  <div className="col-lg-4 footer-copyright">
    <Link to="/" title="">
      <img src={logo} alt="Logo" />
    </Link>
    <p>
      <span className="moto">
        {moto.map((m, i) => (
          <span key={i} style={styles.moto}>
            {m}
          </span>
        ))}
      </span>
    </p>
    <p style={styles.text}>{children}</p>
  </div>
);
export default footerCopyRight;
