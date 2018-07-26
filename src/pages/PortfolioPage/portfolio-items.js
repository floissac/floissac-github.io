import React from 'react';

export default [{
  name: 'rApp',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        <a target="_blank" rel="noopener noreferrer" href="https://r-app-app.herokuapp.com/">r'App</a>
      </div>
      <div className='portfolio-item__desc'>
        A rap music sharing web app where users can upload or view songs by various artists.
      </div>
      <div className='portfolio-item__icon'>
        {/* <i className="fab fa-js"></i> */}
        {/* <i className="fab fa-npm"></i> */}
      </div>
      <div className='portfolio-item__links'>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/floissac/wdi-second-project"><i className="fab fa-github"></i></a>
      </div>
    </div>
  )
}, {
  name: 'KO Fightclub',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>

        <a target="_blank" rel="noopener noreferrer" href="https://ko-fightclub.herokuapp.com/">KO Fightclub</a>
      </div>
      <div className='portfolio-item__desc'>
        A basic 2D turn based fighting game where users play against the computer.
      </div>
      <div className='portfolio-item__icon'>
        {/* <i className="fab fa-html5"></i> */}
        {/* <i className="fab fa-css3"></i> */}
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/floissac/wdi-first-project"><i className="fab fa-github"></i></a>
      </div>
    </div>
  )
}, {
  name: 'On That Wave',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        <a target="_blank" rel="noopener noreferrer" href="https://on-that-wave.herokuapp.com/">On That Wave</a>
      </div>
      <div className='portfolio-item__desc'>
        A fully responsive app where registered users can search through an entire database of over 1000 cocktails.
      </div>
      <div className='portfolio-item__icon'>
        {/* <i className="fab fa-react"></i> */}
        {/* <i className="fab fa-js"></i> */}
      </div>
      <div className='portfolio-item__links'>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/floissac/WDI-GROUP-PROJECT"><i className="fab fa-github"></i></a>
      </div>
    </div>
  )
}]
