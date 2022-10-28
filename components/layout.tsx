import Header from './header';

const Layout = ({ children }: any): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <section>{children}</section>
      </main>
    </>
  )
}

export default Layout
