import '@fontsource/inter/600.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/400.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { DashboardLayout } from '@/layouts/DashboardLayout';
import theme from '@/utils/chakra-theme';
import '../utils/overrides.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    </ChakraProvider>
  );
}
