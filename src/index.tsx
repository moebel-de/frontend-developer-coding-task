import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Roboto', sans-serif;
  }
  body {
    margin:0;
  }
  #root{
    min-height:100vh;
    width:100vw;
  }
`

ReactDOM.render(
  <div>
    <App />
    <GlobalStyle />
  </div>,
  document.getElementById('root')
)
