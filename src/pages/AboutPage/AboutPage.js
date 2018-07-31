import React from 'react';
import PropTypes from 'prop-types';
import SocialIcons from '@components/SocialIcons';

import ScrollToPrevious from '@components/ScrollToPrevious';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, aboutColor, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: aboutColor }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <div className="about-h1-wrapper">
        <h1 style={{ color: colorPrimary }}>About <br /> </h1>
      </div>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>



            Hi! I'm Will & I'm a full-stack web developer based in London.

            I'm capable of building, designing, operating & maintaining full stack web applications. Currently, my interests lie more towards the front end of the stack, at the intersection of code and design.

            <br/>


            <SocialIcons />
          </div>

        </div>
      </div>
      <ScrollToPrevious pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
