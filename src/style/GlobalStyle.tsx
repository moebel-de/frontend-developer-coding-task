import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  html, body, #root {
    height: 100%
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: rgb(43, 18, 2);
    height: 100%
  }

  .error {
    color: #f22;
    padding: 20px;
    text-align: center;
  }
  h2 {
    font-weight: 900;
    font-size: 30px;
    margin-bottom: 20px;
  }
  .loading {
    text-align: center;
  }
`;
