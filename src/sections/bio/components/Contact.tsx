import styled from 'styled-components';
import { DevicePhoneMobileIcon, DocumentTextIcon, EnvelopeOpenIcon, MapPinIcon } from '@heroicons/react/24/solid';


export const InvisibleLink = styled.a`
  color: inherit;
  text-decoration: none;
`;

const ContactContainer = styled.section`
  display: grid;
  grid-template-columns: 32px auto;
  grid-row-gap: ${props => props.theme.spacing.space_8};

  & svg {
    margin-top: -2px;
  }
`;

export default function Contact() {
  return (
    <ContactContainer>
      <EnvelopeOpenIcon width={20} />
      <span>peter.yhc.chen@gmail.com</span>
      <DevicePhoneMobileIcon width={20} />
      <span>0401 687 053</span>
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' height='20' width='20'>
        <path fill='#444444' fillRule='evenodd'
              d='M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM6.20455 7.90909C7.14594 7.90909 7.90909 7.14594 7.90909 6.20455C7.90909 5.26315 7.14594 4.5 6.20455 4.5C5.26315 4.5 4.5 5.26315 4.5 6.20455C4.5 7.14594 5.26315 7.90909 6.20455 7.90909ZM7.90909 19.5V9.27273H4.5V19.5H7.90909ZM12.3409 9.27273H9.27273V19.5H12.3409V13.3304C12.7362 12.6876 13.418 12 14.3864 12C15.75 12 16.0909 13.3636 16.0909 14.0455V19.5H19.5V14.0455C19.5 12.2184 18.7025 9.27273 15.75 9.27273C13.8721 9.27273 12.8294 9.95784 12.3409 10.5996V9.27273Z'
              clipRule='evenodd'></path>
      </svg>
      <InvisibleLink href='https://linkedin.com/in/peter-yhc' target='_blank'>
        linkedin.com/in/peter-yhc
      </InvisibleLink>
      <DocumentTextIcon width={20} />
      <InvisibleLink href='https://peter-yhc.github.io/' target='_blank'>
        peter-yhc.github.io
      </InvisibleLink>
      <MapPinIcon width={20} />
      <span>Canberra, ACT</span>
    </ContactContainer>
  )
    ;
}
