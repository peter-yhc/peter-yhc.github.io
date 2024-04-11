import { HtmlHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';


const Container = styled.div((({ theme }) => css`
  page-break-before: always;
  position: relative;
  flex: 0 0 210mm;
  width: 210mm;
  height: 297mm;
  box-shadow: 0 5px 10px 0 darkgrey;
  margin: 0 auto;
  display: grid;
  place-items: center;

  &:before {
    content: ' ';
    position: absolute;
    background-color: ${theme.colours.blueGrey600};
    clip-path: polygon(0% 0%, 100% 0%, 100% 40%, 0% 60%);
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  &:after {
    content: ' ';
    position: absolute;
    background-color: ${theme.colours.blueGrey200};
    clip-path: polygon(0% 100%, 100% 100%, 100% 40%, 0% 60%);
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  @media print {
    box-shadow: none;
    &:before {
        background-color: white;
    }

    &:after {
        background-color: white;
    }
  }
`));

const Content = styled.main`
  width: calc(100% - 2cm);
  height: calc(100% - 2cm);
  background-color: white;
  padding: ${props => props.theme.spacing.space_32};
  display: flex;
  flex-direction: column;
  z-index: 2;

  & > * + * {
    margin-top: ${props => props.theme.spacing.space_24};
  }
`;

export default function Paper({ children, className }: HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <Container className={className}>
      <Content>
        {children}
      </Content>
    </Container>
  );
}