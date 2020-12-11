import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import 'normalize.css';
import Typography from '../styles/Typography';

export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Typography />
      <Nav />
      <p>{children}</p>
      <Footer />
    </div>
  );
}
