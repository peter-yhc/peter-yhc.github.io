import { HtmlHTMLAttributes } from 'react';
import { Mono } from '../../../theme/tokens.ts';
import styled from 'styled-components';

const List = styled.ul`
  position: relative;

  &:before {
    position: absolute;
    left: -${(props) => props.theme.spacing.space_24};
    top: 0;
    content: ' ';
    width: 0;
    height: 100%;

    // use border instead of background-color to prevent divider from disappearing
    // when printing without backgrounds
    border: 1px solid ${(props) => props.theme.colours.black300};
  }

  @media only screen and (max-width: 640px) {
    font-family: 'Roboto Slab', sans-serif;
    font-size: 0.9em;
    margin-left: 14px;
    margin-top: ${(props) => props.theme.spacing.space_12};
    &:before {
      left: -${(props) => props.theme.spacing.space_0};
    }
  }
`;

function Skills({ children }: HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <List>
      <Mono>
        <strong>Technologies</strong>
      </Mono>
      <br />
      {children}
    </List>
  );
}

export { Skills };
