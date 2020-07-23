import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: rgb(43, 18, 2);
  }
`;
