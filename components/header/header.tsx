import Button from '../button'
import Image from 'next/image'
import Link from 'next/link'
import Logo from 'public/icons/logo.svg'
import Menu from 'public/icons/menu.svg'
import { NavBar } from './styles'

const Header = (): JSX.Element => {
  return (
    <header>
      <NavBar>
        <Link href={'/'}>
          <Image src={Logo} alt={'logo'} width={145} height={34} />
        </Link>
        <Button variant={'icon'} icon={Menu} />
      </NavBar>
    </header>
  )
}

export default Header
