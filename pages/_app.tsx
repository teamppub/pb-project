import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { Suspense } from 'react';
import { RecoilRoot } from 'recoil';

import 'styles/index.css';

import Container from 'components/Organisms/Common/Container';
import GlobalStyles from 'styles/GlobalStyles';
import theme from 'styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <GlobalStyles />
        <Suspense fallback="Loading...">
          <Script strategy="lazyOnload" />
          <Container>
            <Component {...pageProps} />
          </Container>
        </Suspense>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default MyApp;
