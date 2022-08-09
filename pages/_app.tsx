import { ThemeProvider } from '@emotion/react';
import Container from 'components/Organisms/Common/Container';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { Suspense } from 'react';
import GlobalStyles from 'styles/GlobalStyles';

import 'styles/index.css';
import theme from 'styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Suspense fallback="Loading...">
        <Script strategy="lazyOnload" />
        <Container>
          <Component {...pageProps} />
        </Container>
      </Suspense>
    </ThemeProvider>
  );
}

export default MyApp;
