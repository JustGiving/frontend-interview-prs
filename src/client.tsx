import React from 'react';
import { render } from 'react-dom';
import Donations from './Donations';
import Footer from './Footer';
import './app.css';

render(
  <div>
    <div className="main">
      <Donations />
    </div>
    <div className="footer">
      <Footer />
    </div>
  </div>,
  document.body,
);
