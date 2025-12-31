import styled from "styled-components";
import { ButtonLink } from "../ButtonLink";
import { ReactComponent as MailIcon } from "./mail.svg";

export const Wrapper = styled.header`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr;
  grid-gap: 64px;
  margin-top: -30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-gap: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-gap: 12px;
    grid-template-columns: 1fr;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 30vw;
  max-width: 384px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 132px;
  }
`;

export const ThisIs = styled.div`
  font-weight: bold;
  font-size: 12px;
  letter-spacing: initial;
  text-transform: uppercase;
`;

export const Name = styled.h1`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 900;
  font-size: 38px;
  margin: 12px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 8px;
    font-size: 22px;
  }
`;

export const Summary = styled.p`
  margin: 36px 0 0 0;
  font-size: 20px;
  line-height: 1.4;
  max-width: 650x;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    margin-top: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
    max-width: 570px;
  }
`;

export const StyledButtonLink = styled(ButtonLink)`
  margin-top: 32px;
  display: inline-flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 24px;
  }
`;

export const ButtonIcon = styled(MailIcon)`
  margin-right: 16px;
`;
