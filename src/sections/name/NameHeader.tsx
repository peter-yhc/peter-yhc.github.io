import styled from 'styled-components';
import { H1, Mono, typography } from '../../theme/tokens.ts';

const Header = styled.header`
  margin: ${props => props.theme.spacing.space_32} 0 ${props => props.theme.spacing.space_24} ${props => props.theme.spacing.space_32};
`;

const Sub = styled.sub`
  ${typography.large};
  font-style: italic;
`;

export default function NameHeader() {

  return (
    <Header>
      <H1><Mono>Peter Chen</Mono></H1>
      <Sub>Full Stack Developer</Sub>
    </Header>
  );
}