import { HtmlHTMLAttributes } from 'react';
import { Mono } from '../../../theme/tokens.ts';
import styled from 'styled-components';


const List = styled.ul`
  position: relative;

  &:before {
    position: absolute;
    left: -${props => props.theme.spacing.space_24};
    top: 0;
    content: ' ';
    width: 2px;
    height: 100%;
    background-color: ${props => props.theme.colours.black300};
  }
`;


function Skills({ children }: HtmlHTMLAttributes<HTMLDivElement>) {

  return (
    <List>
      <Mono><strong>Technologies</strong></Mono><br />
      {children}
    </List>
  );
}

export {
  Skills,
};