import { HtmlHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';


const Container = styled.div((({ theme }) => css`
  width: 210mm;
  height: 297mm;
  background: linear-gradient(to top,
  ${theme.colours.blueGrey200} 0%,
  ${theme.colours.blueGrey200} 50%,
  ${theme.colours.blueGrey600} 50%,
  ${theme.colours.blueGrey600} 100%);
  box-shadow: 0 5px 10px 0 darkgrey;
  margin: 0 auto;
  display: grid;
  place-items: center;
`));

export default function Paper({ children, className }: HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <Container className={className}>
      {children}
    </Container>
  );
}