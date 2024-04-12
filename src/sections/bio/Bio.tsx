import styled from 'styled-components';
import Contact from './components/Contact.tsx';

const BioContainer = styled.section`
  display: flex;
  justify-content: space-between;
  column-gap: ${(props) => props.theme.spacing.space_48};
`;

const AboutMe = styled.p`
  @media only screen and (max-width: 640px) {
    display: none;
  }
`;

export default function Bio() {
  return (
    <BioContainer>
      <AboutMe>
        As an experienced software engineer with over eleven years in the field,
        I am motivated by the challenge of tackling ambitious ideas and thrive
        in environments that prioritize team collaboration. Currently, I am
        deeply interested in developing user-facing systems and bringing designs
        to life, finding great satisfaction in turning creative concepts into
        practical solutions.
      </AboutMe>
      <Contact />
    </BioContainer>
  );
}
