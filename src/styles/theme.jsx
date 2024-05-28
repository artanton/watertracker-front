import { keyframes } from 'styled-components';

export const theme = Object.freeze({
  colors: {
    primaryWhite: '#FFFFFF',
    primaryBlack: '#2F2F2F',
    primaryBlue: '#407BFF',
    secondaryGray: '#ECF2FF',
    secondaryRed: '#EF5050',
    secondaryBlue: '#9EBBFF',
    secondaryOrange: '#FF9D43',
    secondaryGrayBlue: '#D7E3FF',
    secondaryDarkGray: '#8f8f8f',
    secondaryLightBlue: '#d7e3ff',
  },

  fonts: {
    body: 'Roboto, sans-serif',
  },

  fontSizes: {
    mainTitle: '36px',
    subtitle: '26px',
    daystitle: '24px',
    listTitle: '18px',
    text: '16px',
    info: '12px',
  },

  fontWeights: {
    bold: 700,
    medium: 600,
    normal: 500,
    regular: 400,
  },

  lineHeights: {
    mainTitle: 1.17,
    subtitle: 1.2,
    listTitle: 1.1,
    text: 1.25,
    info: 1.33,
  },

  shadows: {
    normalButton: '0px 4px 8px 0px rgba(64, 123, 255, 0.34)',
    hoverButton: '0px 4px 14px 0px rgba(64, 123, 255, 0.54)',
    statsFrame: '0px 4px 4px 0px rgba(64, 123, 255, 0.30)',
    userModal: '0px 4px 8px 0px rgba(64, 123, 255, 0.20)',
    normaFrame: '0px 4px 8px 0px rgba(158, 187, 255, 0.12)',
    wrapper: '0px 4px 14px 0px rgba(64, 123, 255, 0.30)',
    table: '0px 2px 4px 0px #407BFF4D;',
  },

  border: {
    normal: '1px solid #407BFF',
    secondary: '1px solid #9EBBFF',
  },

  radii: {
    round: '50%',
    medium: '40px',
    normal: '10px',

    small: '6px',
  },
  transition: {
    normal: 'transform 0.3s ease',
  },
  transform: {
    large: 'scaleX(1)',
    small: 'scaleX(0)',
    middle: 'translate(-50%, 50%)',
    translateX: 'translateX(-50%)',
    translateY: 'translateY(-50%)',
    calendar: 'translateX(-49%) translateY(-115%)',
    calendarmed: ' translate(-50%, -144%)',
  },
});

export const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

// Светящийся эффект
export const glow = keyframes`
  0% {
    box-shadow: 0 0 5px ${theme.colors.primaryBlue};
  }
  50% {
    box-shadow: 0 0 15px ${theme.colors.primaryBlue};
  }
  100% {
    box-shadow: 0 0 5px ${theme.colors.primaryBlue};
  }
`;
