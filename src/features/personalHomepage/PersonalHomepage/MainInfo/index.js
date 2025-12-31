import malgorzataWiewioraProfile from "./profile.jpg";
import {
  Avatar,
  StyledButtonLink,
  ButtonIcon,
  Name,
  Summary,
  ThisIs,
  Wrapper,
} from "./styled";
import { email } from "../email";

export const MainInfo = () => (
  <Wrapper>
    <Avatar src={malgorzataWiewioraProfile} alt="Malgorzata Wiewiora" />
    <div>
      <ThisIs>This is</ThisIs>
      <Name>Małgorzata Wiewióra</Name>
      <Summary>
        💡👩💻 I’m a creative and passionate Frontend Developer specializing in React,
        currently seeking my next professional opportunities.
      </Summary>
      <StyledButtonLink href={`mailto:${email}`} title={email}>
        <ButtonIcon />
        Hire me
      </StyledButtonLink>
    </div>
  </Wrapper>
);
