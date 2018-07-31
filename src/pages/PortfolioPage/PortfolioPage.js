import React from 'react';
import PropTypes from 'prop-types';
import PortfolioItem from '@components/PortfolioItem';
import portfolioItems from './portfolio-items';

import ScrollToPrevious from '@components/ScrollToPrevious';
import ScrollToNext from '@components/ScrollToNext';

import './style.scss';

const PortfolioPage = (props, context) => {
  const {
    theme: { colorPrimary, colorAlternate, textPrimary, colorCards, portfolioColor }
  } = context;

  return (
    <div className="portfolio-page" style={{ backgroundColor: portfolioColor }}>
      <div className="content-grid">
        <div className="h1-wrapper">
        <h1 style={{ color: colorPrimary }}>Portfolio</h1>
      </div>
        <div className="portfolio-wrapper">
          <style jsx="true">
            {`
              .portfolio-item {
                background-color: ${colorCards};
                color: ${textPrimary};
              }
              .portfolio-item a {
                color: ${textPrimary};
              }
              .portfolio-item__links a:hover {
                border-bottom: 2px solid ${colorAlternate};
              }
            `}
          </style>
          {portfolioItems.map((item, i) => (
            <PortfolioItem render={item.render} key={i} />
          ))}
        </div>
      </div>
      <ScrollToPrevious pageSelector=".landing-page" />
      <ScrollToNext pageSelector=".about-page" />
    </div>
  );
};

PortfolioPage.contextTypes = {
  theme: PropTypes.any
};

export default PortfolioPage;
