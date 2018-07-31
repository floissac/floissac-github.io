const themes = [
  {
    name: 'blue',
    firstTime: true,
    colorPrimary: '#696969',
    colorAlternate: '#FAFAFA',
    colorHighlight: '#daedf7',
    colorCards:'#FDF5E6',
    landingColor:'#FDF5E6',
    portfolioColor: '#FFFAF0',
    aboutColor: '#FDF5E6',
    textPrimary: '#696969',
    navAlpha: 'rgba(250, 250, 250, 0.75)'
  }
];

export const getThemes = () => {
  return themes.map((theme) => {
    return {
      name: theme.name,
      firstTime: theme.firstTime,
      colorPrimary: theme.colorPrimary,
      colorAlternate: theme.colorAlternate,
      colorHighlight: theme.colorHighlight,
      colorCards: theme.colorCards,
      landingColor: theme.landingColor,
      portfolioColor: theme.portfolioColor,
      aboutColor: theme.aboutColor,
      bgPrimary: theme.colorAlternate,
      bgAlternate: theme.colorPrimary,
      bgLanding: theme.colorPrimary,
      textPrimary: theme.textPrimary,
      textAlternate: theme.colorAlternate,
      textLanding: theme.colorPrimary,
      navAlpha: theme.navAlpha
    };
  });
};
