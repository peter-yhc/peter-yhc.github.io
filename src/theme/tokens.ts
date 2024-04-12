import styled, { css } from 'styled-components';

export const headingFrame = css`
  border-top: ${(props) => props.theme.borders.headers};
  border-bottom: ${(props) => props.theme.borders.headers};
  line-height: 32px;
`;

export const typography = {
  xxlarge: css`
    font-size: 24px;
    font-weight: 600;
    line-height: 28px;
  `,
  xlarge: css`
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
  `,
  large: css`
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
  `,
  medium: css`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  `,
  small: css`
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  `,
};

interface Heading {
  noMargins?: boolean;
}

export const H1 = styled.h1<Heading>`
  ${typography.xxlarge};
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin: 0;
`;

export const H2 = styled.h2<Heading>`
  ${typography.xlarge};
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0;
`;

export const H3 = styled.h3<Heading>`
  ${typography.large};
  margin: 1em 0 0 0;
`;

export const H4 = styled.h4<Heading>`
  ${typography.medium};
  color: ${(props) => props.theme.colours.black500};
  font-weight: 600;
  margin: 0 0 1em 0;
  text-transform: uppercase;
`;

export const Mono = styled.span`
  font-family: 'Roboto Slab', sans-serif;
  letter-spacing: 0.5px;
  font-size: 0.9em;
`;
