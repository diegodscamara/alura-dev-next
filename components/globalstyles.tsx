import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-size: 62.5%;
  }

  * {
    box-sizing: border-box;
  }

  h1 {
    font-size: 3.2rem;
    line-height: 2.1rem;
    font-weight: 700;
  }

  span {
    font-size: 2.4rem;
    line-height: 1.6rem;
    font-weight: 400;
  }

  p, 
  a {
    font-size: 1.8rem;
    line-height: 1.2rem;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  button, 
  input {
    height: 5.6rem;
    border-radius: .8rem;
    cursor: pointer;
  }
`

export default GlobalStyle
