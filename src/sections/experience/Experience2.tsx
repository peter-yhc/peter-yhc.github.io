import { H3, H4, Mono } from '../../theme/tokens.ts';
import { Skills } from './components/Skills.tsx';
import { JobContent } from './components/JobContent.tsx';

export default function Experience1() {

  return (
    <section>
      <JobContent>
        <ul>
          <strong>Pricing Engine Project</strong>
          <li>Helped introduce team to AWS architecture and tooling</li>
          <li>Built web tool used by account managers to do bulk contract reviews and calculate optimal rates
            for customers
          </li>
        </ul>
        <Skills>
          Vue.js, Node.js, Kotlin, Spring, Kubernetes, TDD, AWS (ECS, SNS, SQS, λ, DynamoDB)
        </Skills>
      </JobContent>
      <JobContent>
        <ul>
          <strong>Lending Product Project</strong>
          <li>Built new lending product from inception to limited release in six months, and GA within the
            year
          </li>
          <li>Created accounting, reporting, and transaction systems for loans</li>
          <li>Created tooling (web - bootstrap, Spring MVC) for internal staff to manage new product</li>
          <li>Collaborated closely with Sales, Finance, Risk, Product, and Operations teams to ensure timely
            and quality delivery
          </li>
          <li>Leveraged Extreme Programming and a microservices architecture to allow for quick
            experimentation and team scalability
          </li>
        </ul>
        <Skills>Java, Kotlin, Spring, microservices, high availability architecture, TDD</Skills>
      </JobContent>

      <H3>Java Developer</H3>
      <H4><Mono>Ericsson Canada (Montreal) | 2012 - 2015</Mono></H4>
      <JobContent>
        <ul>
          <li>Built self-serve cloud provisioning system where users could create and manage their own private
            cloud environments
          </li>
          <li>Main integrator for VMware and OpenStack APIs</li>
          <li>Contributed to system and architecture decisions</li>
        </ul>
        <Skills>Java, Spring, PHP, MySQL, VMware, Javascript</Skills>
      </JobContent>
    </section>
  );
}