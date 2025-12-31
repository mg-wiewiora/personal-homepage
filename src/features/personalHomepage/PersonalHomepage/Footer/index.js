import { email } from "../email";
import { SocialMediaIcons } from "./SocialMediaIcons";
import {
  Address,
  EmailLink,
  EmailWrapper,
  LetsTalk,
  Paragraph,
  Wrapper,
} from "./styled";

export const Footer = () => (
  <Wrapper>
    <LetsTalk>Let's talk!</LetsTalk>
    <Address>
      <EmailWrapper>
        <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
      </EmailWrapper>
      <Paragraph>
        I’m always happy to take on new projects and jobs whenever I’m
        available. If you are in need of support with a&nbsp;website, dashboard, or
        application and are looking for a&nbsp;creative mind to join in, feel free to
        contact me anytime!😊
      </Paragraph>
      <SocialMediaIcons />
    </Address>
  </Wrapper>
);
