import { Container, Description, Main, Title } from '../components/sharedstyles'

import Link from 'next/link'

export default function About() {
  return (
    <Container>
      <Main>
        <Title>About Page</Title>
        <Description>
          <Link href="/">
            &larr; Go Back
          </Link>
        </Description>
      </Main>
    </Container>
  )
}
