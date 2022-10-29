import Image from 'next/image'
import Link from 'next/link'
import Logo from 'public/icons/logo.svg'

const path = [
  { name: 'Editor de código', path: '/' },
  { name: 'Comunidade', path: '/community' }
]

const Header = (): JSX.Element => {
  return (
    <header>
      <nav>
        <Link href={'/'}>
          <Image src={Logo} alt={'logo'} width={145} height={34} />
        </Link>
        <ul>
          {path.map(value => {
            return (
              <li key={value as unknown as null | undefined}>
                <Link href={value.path}>{value.name}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Header
