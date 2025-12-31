import styled from "styled-components";

export const SubHeader = styled.h2`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 900;
  font-size: 30px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
`;