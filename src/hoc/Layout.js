import React, { Fragment } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

const layout = ({ children }) => (
  <Fragment>
    <Header />
    <main>{children}</main>
    <Footer />
  </Fragment>
);
export default layout;
