import theme from './theme/theme.ts';

declare module 'styled-components' {
  export interface DefaultTheme {
    colours: typeof theme.colours;
    spacing: typeof theme.spacing;
    lineHeight: typeof theme.lineHeight;
    borders: typeof theme.borders;
  }
}