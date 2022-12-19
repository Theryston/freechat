import * as React from 'react';
import type { AppProps } from 'next/app';
import { Container, createTheme, NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import Header from '../components/Header';
import Layout from '../components/Layout';

const lightTheme = createTheme({
  type: 'light',
});

const darkTheme = createTheme({
  type: 'dark',
});

function PageContent({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <Header />
      <Container>{children}</Container>
    </Layout>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <PageContent>
          <Component {...pageProps} />
        </PageContent>
      </NextUIProvider>
    </NextThemesProvider>
  );
}
