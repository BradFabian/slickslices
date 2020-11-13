import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import 'normalize.css';

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <p>{children}</p>
      <Footer />
    </div>
  );
}
