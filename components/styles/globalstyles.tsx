import { createGlobalStyle } from 'styled-components'
import theme from './theme'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-size: 62.5%;
  }

  * {
    box-sizing: border-box;
  }

  h1 {
    font-size: ${theme.font.size.large};
    line-height: ${theme.font.lineHeight.large};
    font-weight: ${theme.font.weigh.bold};
  }

  span {
    font-size: ${theme.font.size.medium};
    line-height: ${theme.font.lineHeight.medium};
    font-weight: ${theme.font.weigh.regular};
  }

  p, 
  a {
    font-size: ${theme.font.size.small};
    line-height: ${theme.font.lineHeight.small};
    font-weight: ${theme.font.weigh.regular};
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  button, 
  input {
    height: ${theme.spacing.xx3large};
    border-radius: ${theme.borderRadius.medium};
    cursor: pointer;
  }
`

export default GlobalStyle
