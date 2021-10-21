import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../src/theme/index'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp