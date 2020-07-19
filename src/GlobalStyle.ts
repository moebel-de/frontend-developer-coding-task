import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
 
const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
`

export default GlobalStyle