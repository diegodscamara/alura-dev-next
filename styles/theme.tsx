const theme = {
  colors: {
    general: {
      blue100: '#96B9FD',
      blue200: '#7BA4FC',
      blue300: '#5081FB',
      blue400: '#051D3B',
      gray100: 'rgba(255, 255, 255, 0.08)',
      gray200: 'rgba(255, 255, 255, 0.16)',
      gray300: '#2D415B',
      gray400: 'rgba(255, 255, 255, 0.24)',
      gray500: '#141414',
      white: '#FFFFFF'
    },
    cards: {
      blue: '#6BD1FF',
      green: '#9AFF6B',
      yellow: '#FFC46B',
      pink: '#FF6BCD',
      purple: '#6B83FF'
    }
  },
  opacity: {
    opacity100: 0.1,
    opacity200: 0.2,
    opacity400: 0.4,
    opacity600: 0.64
  },
  font: {
    weight: {
      regular: 400,
      bold: 700
    },
    size: {
      xsmall: '1.6rem',
      small: '1.8rem',
      medium: '2.4rem',
      large: '3.2rem'
    },
    lineHeight: {
      small: 1.2,
      medium: 1.6,
      large: 2.1,
      xlarge: 2.4,
    }
  },
  spacing: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '3.6rem',
    xlarge: '4rem',
    xxlarge: '5.2rem',
    xx2large: '5.4rem',
    xx3large: '5.6rem'
  },
  effect: {
    transition: {
      default: '0.3s ease-in-out',
      fast: '0.1s ease-in-out'
    },
    boxShadow: `0px 1.6rem 2.4rem rgba(0, 0, 0, 0.24)`
  },
  borderRadius: {
    small: '0.4rem',
    medium: '0.8rem',
    large: '1.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },

  breakpoints: {
    tablet: '600px',
    laptop: '992px',
    desktop: '1200px',
    hd: '1368px',
    fullhd: '1920px',
    quadhd: '2560px'
  }
}

export default theme
