import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

const app = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default app;
