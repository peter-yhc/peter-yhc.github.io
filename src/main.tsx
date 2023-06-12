import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Theme from './theme/theme.ts';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    font-size: 14px;
    font-family: Nunito, sans-serif;
    color: ${props => props.theme.colours.black600};
    line-height: 1.5;
    @media print {
      width: 210mm;
      height: 297mm;
    }
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

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
