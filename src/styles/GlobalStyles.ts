import { createGlobalStyle } from "styled-components";

import { THEME } from "../config";
import { NormalizeCSS } from "./Normalize";

export const GlobalStyle = createGlobalStyle`
   ${NormalizeCSS}
  
   * {
      box-sizing: border-box;
  }

  html,
  body {
    font-size: ${THEME.baseFont};
    font-family: ${THEME.font};
    background-color: ${THEME.pageBackground};
  }
  
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
`;
