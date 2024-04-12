import { createGlobalStyle } from 'styled-components';

const colours = {
  blueGrey200: '#E7ECEF',
  blueGrey600: '#65768E',
  black300: '#858585',
  black500: '#555',
  black600: '#444',
};

const spacing = {
  space_0: '0px',
  space_4: '4px',
  space_8: '8px',
  space_12: '12px',
  space_16: '16px',
  space_24: '24px',
  space_32: '32px',
  space_48: '48px',
  space_64: '64px',
  space_96: '96px',
};

const lineHeight = {
  headers: '32px',
};

const borders = {
  headers: `2px solid ${colours.black300}`,
};

export default {
  colours,
  spacing,
  lineHeight,
  borders,
};

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    font-size: 14px;
    font-family: Nunito, sans-serif;
    color: ${(props) => props.theme.colours.black600};
    line-height: 1.5;
    @media print {
      width: 210mm;
      height: 297mm;
    }
  }

  @page {
    size: A4;
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  ul, p {
    margin: 0;
  }

  ul {
    padding-left: 1em;
  }
`;
