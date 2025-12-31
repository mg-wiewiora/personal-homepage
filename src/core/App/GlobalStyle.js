import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    font-family: "Inter", sans-serif;
    color: ${({ theme }) => theme.colors.site.text};
    background: ${({ theme }) => theme.colors.site.background};
    font-size: 18px;
    letter-spacing: 0.05em;
    overflow-y: scroll;
    word-break: break-word;
    padding-bottom: 108px;
    transition: background 0.4s;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding-bottom: 32px;
    }
  }
`;
