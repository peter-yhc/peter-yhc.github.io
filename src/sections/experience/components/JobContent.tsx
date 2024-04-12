import styled from 'styled-components';

export const JobContent = styled.div`
  display: grid;
  grid-template-columns: auto 200px;
  column-gap: ${(props) => props.theme.spacing.space_48};
  margin-bottom: 1.5em;

  @media only screen and (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;
