import Paper from './sections/paper/Paper.tsx';
import NameHeader from './sections/title/NameHeader.tsx';
import Contact from './sections/contact/Contact.tsx';
import styled from 'styled-components';
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

const Bio = styled.section`
  display: flex;
  justify-content: space-between;
  gap: ${props => props.theme.spacing.space_48};
  margin-bottom: 0.5em;
`;

export default function App() {

  return (
    <Background>
      <Paper>
        <Content>
          <NameHeader />
          <Bio>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum sapien sagittis enim
              blandit
              ornare. Proin dictum, turpis nec luctus viverra, lectus eros pretium sapien, eu porta massa massa ut nisl.
              In efficitur lacus turpis. Sed porta aliquet dui placerat efficitur. Quisque in mi quis lacus egestas
              pretium. Aliquam et augue id massa fringilla suscipit. Integer faucibus interdum eros.
            </p>
            <Contact />
          </Bio>
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