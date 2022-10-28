import Link from 'next/link';

const path = [
  {name: 'Editor de código', path: '/' },
  {name: 'Comunidade', path: '/community' }]

const Header = (): JSX.Element => {
  return (
    <header>
      <nav>
        <ul>
          {path.map((value) => {
            return (
              <li key={value as unknown as null | undefined}>
                <Link href={value.path}>
                  {value.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Header
