import Heading from '../heading/Heading.tsx';
import { H3, H4, Mono } from '../../theme/tokens.ts';
import { Skills } from './components/Skills.tsx';
import { JobContent } from './components/JobContent.tsx';

export default function Experience1() {

  return (
    <section>
      <Heading>Experience</Heading>
      <H3>Senior Software Engineer</H3>
      <H4><Mono>Prospection | 2022 - 2023</Mono></H4>
      <JobContent>
        <ul>
          <li>Led development of new Design System aimed to make frontend development easier, faster, and more
            consistent
          </li>
          <ul>
            <li>
              Stressed importance of good developer experience which resulted in wide adoption across company and
              multiple active contributors
            </li>
          </ul>
          <li>Worked closely with UX designers to overhaul outdated UI designs and improve usability across multiple
            features
          </li>
          <li>Upskilled other developers in better React and modern CSS practices through discussions and paired
            programming
          </li>
        </ul>
        <Skills>
          React, Redux/Toolkit, Typescript, Styled Components, Storybook, Spring, Webpack, AWS, Microservices
        </Skills>
      </JobContent>
      <H3>Senior Software Engineer</H3>
      <H4><Mono>Tyro Payments | 2015 - 2021</Mono></H4>
      <JobContent>
        <ul>
          <strong>Customer Portal Project</strong>
          <li>Launched a new and enhanced React customer portal to slowly replace old Spring MVC portal</li>
          <li>Utilised micro frontend pattern + bffs for multiple new features and updates existing ones</li>
          <li>Migrated user authentication from Spring MVC to Auth0</li>
          <li>Refreshed customer facing website with more modern design and introduced responsiveness
            throughout
          </li>
          <li>Drove better practices in React and general web development</li>
        </ul>
        <Skills>
          React, Redux/Toolkit, Typescript, Styled Components, Node.js, Auth0, Spring, Thymeleaf, AWS,
          Kubernetes, Webpack, Microfrontends, Microservices
        </Skills>
      </JobContent>
      <JobContent>
        <ul>
          <strong>Pricing Engine Project</strong>
          <li>Helped introduce team to AWS architecture and tooling</li>
          <li>Built web tool used by account managers to do bulk contract reviews and calculate optimal rates
            for customers
          </li>
        </ul>
        <Skills>
          Vue.js, Node.js, Kotlin, Spring, Kubernetes, TDD, AWS (λ, Dynamo, SNS, SQS, ECS, IAM)
        </Skills>
      </JobContent>
    </section>
  );
}