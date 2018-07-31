import React, { Component } from 'react';
import LandingPage from '@pages/LandingPage';
import AboutPage from '@pages/AboutPage';
import PortfolioPage from '@pages/PortfolioPage';
import ParallaxBackground from '@components/ParallaxBackground';

import ThemeSwitcher from '@components/ThemeSwitcher';
import Browser from '@components/Browser';

class App extends Component {

  render() {
    return (
      <div className="dev-landing-page">
        <ThemeSwitcher>
          <Browser except firefox>
            <ParallaxBackground />
          </Browser>
          <LandingPage />
          <PortfolioPage />
          <AboutPage />
        </ThemeSwitcher>
      </div>
    );
  }
}

export default App;
