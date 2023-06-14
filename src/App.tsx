import Paper from './sections/paper/Paper.tsx';
import NameHeader from './sections/name/NameHeader.tsx';
import styled from 'styled-components';
import Bio from './sections/bio/Bio.tsx';
import Education from './sections/education/Education.tsx';
import Experience1 from './sections/experience/Experience1.tsx';
import Experience2 from './sections/experience/Experience2.tsx';

const Background = styled.div`
  padding: ${props => props.theme.spacing.space_64};
  gap: ${props => props.theme.spacing.space_48};

  display: flex;
  flex-wrap: wrap;
  
  @media print {
    padding: 0;
    gap: 0;
  }
`;

export default function App() {

  return (
    <Background>
      <Paper>
          <NameHeader />
          <Bio />
          <Experience1 />
      </Paper>
      <Paper>
          <Experience2 />
          <Education />
      </Paper>
    </Background>
  );
}