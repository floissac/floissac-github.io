import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const SocialIcons = (props, context) => {
  const { theme: { colorPrimary } } = context;

  return (
    <div className="social-icons animate-icons">
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/william-floissac-53a05711a/" style={ { color: colorPrimary } }><i className="fab fa-linkedin-in"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/floissac" style={ { color: colorPrimary } }><i className="fab fa-github-square"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="mailto:floissac.w@gmail.com" style={ { color: colorPrimary } }><i className="far fa-envelope-open"></i></a>
      </div>

  );
};

SocialIcons.contextTypes = {
  theme: PropTypes.any
};

export default SocialIcons;
