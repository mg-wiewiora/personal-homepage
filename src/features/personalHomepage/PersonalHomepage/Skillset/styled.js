import styled from "styled-components";
import { SubHeader } from "../SubHeader";
import { ReactComponent as BulletImage } from "./bullet.svg";

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.boxBackground};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  margin-top: 72px;
  padding: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 48px;
    padding: 16px;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-gap: 8px 32px;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 32px;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    margin-top: 12px;
    font-size: 14px;
  }
`;

export const Item = styled.li`
  display: flex;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    line-height: 1.2;
  }
`;

export const Bullet = styled(BulletImage)`
  color: ${({ theme }) => theme.colors.primary};
  height: auto;
  margin-right: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 6px;
    margin-right: 8px;
  }
`;

export const StyleHeader = styled(SubHeader)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.headerLine};
  padding-bottom: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding-bottom: 12px;
  }
`;
