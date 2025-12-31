import styled, { css } from "styled-components";
import { ReactComponent as SunIcon } from "./sun.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  color: inherit;
  outline-offset: 8px;
`;

export const Text = styled.span`
  margin-right: 12px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
  }
`;

export const Box = styled.span`
  background: ${({ theme }) => theme.colors.themeSwitch.background};
  width: 48px;
  padding: 3px;
  border-radius: 12px;
  border: 1px solid;
  display: flex;
`;

export const IconWrapper = styled.span`
  display: flex;
  background: currentColor;
  padding: 3px;
  border-radius: 50%;
  transition: transform 0.3s;

  ${({ moveToRight }) =>
    moveToRight &&
    css`
      transform: translateX(20px);
    `}
`;

export const Icon = styled(SunIcon)`
  color: ${({ theme }) => theme.colors.themeSwitch.icon};
`;
