import Heading from '../heading/Heading.tsx';
import { H3, H4, Mono } from '../../theme/tokens.ts';

export default function Education() {
  return (
    <section>
      <Heading>Education</Heading>
      <H3>M.Eng of Electrical Engineering</H3>
      <H4>
        <Mono>McGill University | 2013 | Montreal</Mono>
      </H4>
      <p>
        <i>
          Thesis: Investigation of ZnO / CdS / CuInSe2 solar cells using a
          custom built I-DLTS system
        </i>
      </p>

      <H3>B.Eng of Electrical Engineering</H3>
      <H4>
        <Mono>McGill University | 2010 | Montreal</Mono>
      </H4>
    </section>
  );
}
