import React from 'react';
import PropTypes from 'prop-types';

import Nav from '@components/Nav';
import ScrollToNext from '@components/ScrollToNext';
import BrowserNotes from '@components/BrowserNotes';

import './style.scss';

const LandingPage = (props, context) => {
  const { theme: { landingColor, colorPrimary } } = context;

  return (
    <div style={{ backgroundColor: landingColor }} className="landing-page">
      <Nav />
      <main style={{ color: colorPrimary }}>
        <BrowserNotes />
        <div className="intro-wrapper">
          <div className="intro-name">Hello World, I'm William Floissac </div>
          <div className="tagline">
            I'm a Web Developer
          </div>
        </div>
      </main>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};
LandingPage.contextTypes = {
  theme: PropTypes.any
};
export default LandingPage;
