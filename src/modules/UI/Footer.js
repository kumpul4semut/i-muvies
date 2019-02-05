import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';

const styles = {
  display: {
    display: 'inline-block'
  }
};
const footer = ({ children, copyrigth }) => (
  <footer>
    <Link to="#!" className="cd-top" title="top" />
    <div id="footer">
      <div id="top_footer" className="full">
        <Container>
          <div className="row">{children}</div>
        </Container>
      </div>
      <div id="copy_right" className="copyright">
        <span style={styles.display}>{copyrigth}</span>
      </div>
    </div>
  </footer>
);
export default footer;
