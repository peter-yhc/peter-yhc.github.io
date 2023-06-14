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
  flex-direction: column;
`;

const Content = styled.main`
  width: calc(100% - 2cm);
  height: calc(100% - 2cm);
  background-color: white;
  padding: ${props => props.theme.spacing.space_32};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.space_16};
`;

export default function App() {

  return (
    <Background>
      <Paper>
        <Content>
          <NameHeader />
          <Bio />
          <Experience1 />
        </Content>
      </Paper>
      <Paper>
        <Content>
          <Experience2 />
          <Education />
        </Content>
      </Paper>
    </Background>
  );
}