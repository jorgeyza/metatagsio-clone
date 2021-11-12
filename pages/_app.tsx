import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { store } from '../app/store';
import { Provider } from 'react-redux';

import { theme } from '../theme';

import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/500.css';
import '@fontsource/open-sans/700.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
