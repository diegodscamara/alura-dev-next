import Button from '../button'
import Image from 'next/image'
import Input from '../input'
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
      <Input placeHolder={'Busque por algo'} type={'search'} alt={'Search bar'} name={'search'} />
    </header>
  )
}

export default Header
