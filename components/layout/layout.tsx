import { Children, Container, Wrapper } from './styles'

import Header from '../header/header'

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Children>{children}</Children>
      </Container>
    </Wrapper>
  )
}

export default Layout
