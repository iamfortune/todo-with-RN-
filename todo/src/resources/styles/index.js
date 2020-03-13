import { createGlobalStyle } from 'styled-components'
import 'limbo-css/dist/css/limbo-min.css'

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 14px;
    color: rgba(55, 55, 58, 1);
  }
  button { transition: opacity 0.2s ease; }
  button:disabled { opacity: 0.6; }
`

export default GlobalStyle
