import {createGlobalStyle} from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #84DCCF;
    --primary-dark: #04395E;
    --primary-darker: #031D44;
    --secondary: #A833B9;
    --accent: #C4B1AE;
    --white: #fff;
  }

  html {
    background-color: #333333;
    color: var(--primary)
  }

`

export default GlobalStyles
