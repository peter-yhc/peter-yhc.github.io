import styled from 'styled-components';
import Contact from './components/Contact.tsx';

const BioContainer = styled.section`
  display: flex;
  justify-content: space-between;
  column-gap: ${props => props.theme.spacing.space_48};
`;

export default function Bio() {

  return (
    <BioContainer>
      <p>
        As an experienced software engineer with over eleven years in the field, I am motivated by the challenge of
        tackling ambitious ideas and thrive in environments that prioritize team collaboration. Currently, I am deeply
        interested in developing user-facing systems and bringing designs to life, finding great satisfaction in turning
        creative concepts into practical solutions.
      </p>
      <Contact />
    </BioContainer>
  );
}