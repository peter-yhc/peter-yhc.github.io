import { HtmlHTMLAttributes } from 'react';
import styled from 'styled-components';
import { H2, headingFrame } from '../../theme/tokens.ts';


const StyledH2 = styled(H2)`
  ${headingFrame};
`;
export default function Heading({ children }: HtmlHTMLAttributes<HTMLHeadingElement>) {

  return (
    <StyledH2>
      {children}
    </StyledH2>
  );
}