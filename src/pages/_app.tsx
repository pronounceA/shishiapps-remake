import React from 'react'

import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import DefaultLayout from '@/layouts/DefaultLayout'
import { defaultTheme } from '@/themes'

function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <ThemeProvider theme={ defaultTheme }>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </ThemeProvider>
    </>
  )
}
export default App
