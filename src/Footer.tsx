import React, { StatelessComponent, useState, useEffect } from 'react';
import { track } from './utils';

const Footer: StatelessComponent = () => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    track('footer-render');
  });

  return (
    <legend>
      <hr />
      Copyright Aperture Science Laboratories
      <span onClick={() => setExpanded(!expanded)}>🍰</span>
      {expanded && <div>The cake is a lie</div>}
    </legend>
  );
};

export default Footer;
