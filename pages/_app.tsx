import { DefaultTheme, ThemeProvider } from 'styled-components'
import { useEffect, useState } from 'react';

import type { AppProps } from 'next/app'
import GlobalStyle from '../components/globalstyles'
import Layout from '../components/layout';

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
}

function App({ Component, pageProps }: AppProps): JSX.Element | null {
  const [showing, setShowing] = useState(false);

  useEffect(() => {
    setShowing(true);
  }, []);

  return !showing ? null : typeof window === 'undefined' ? <></> : <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </>;
}

export default App;
