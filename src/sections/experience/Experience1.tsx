import Heading from '../heading/Heading.tsx';
import { H3, H4, Mono } from '../../theme/tokens.ts';
import { Skills } from './components/Skills.tsx';
import { JobContent } from './components/JobContent.tsx';

export default function Experience1() {
  return (
    <section>
      <Heading>Experience</Heading>
      <H3>Senior Software Engineer</H3>
      <H4>
        <Mono>Prospection | 2022 - 2023</Mono>
      </H4>
      <JobContent>
        <ul>
          <li>
            Led development of new Design System aimed to make frontend
            development easier, faster, and more consistent
          </li>
          <ul>
            <li>
              Stressed importance of good developer experience which resulted in
              wide adoption across company and multiple active contributors
            </li>
          </ul>
          <li>
            Worked closely with UX designers to overhaul outdated UI designs and
            improve usability across multiple features
          </li>
          <li>
            Upskilled fellow developers in better React and modern CSS practices
            through discussions and paired programming
          </li>
          <li>
            Tackled considerable technical frontend debt in replacing
            unmaintained third party libraries, upgrading React, streamlining
            webpack builds
          </li>
        </ul>
        <Skills>
          React, Redux/Toolkit, Typescript, Styled Components, Storybook, Figma,
          Spring, Webpack, TDD, AWS (SNS, SQS, RDS, λ, ECS), microservices
        </Skills>
      </JobContent>
      <H3>Senior Software Engineer</H3>
      <H4>
        <Mono>Tyro Payments | 2015 - 2021</Mono>
      </H4>
      <JobContent>
        <ul>
          <strong>Customer Portal Project</strong>
          <li>
            Launched a new and enhanced React customer portal to slowly replace
            old Spring MVC portal
          </li>
          <li>
            Utilised micro frontend pattern + bffs for multiple new features and
            updates existing ones
          </li>
          <li>Migrated user authentication from Spring MVC to Auth0</li>
          <li>
            Refreshed customer facing website with more modern design and
            introduced responsiveness throughout
          </li>
          <li>Drove better practices in React and general web development</li>
        </ul>
        <Skills>
          React, Redux/Toolkit, Typescript, Styled Components, Node.js, Figma,
          Auth0, Spring, Thymeleaf, Webpack, micro frontends, microservices,
          high availability architecture
        </Skills>
      </JobContent>
    </section>
  );
}
