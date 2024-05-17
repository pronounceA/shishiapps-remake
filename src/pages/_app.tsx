import React from 'react'

import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { i18n } from 'i18next'
import GlobalHeader from '../components/organisms/Layout/GlobalHeader'
import { Box } from '@mui/material'

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <>
      <GlobalHeader />
      <Box>shishiapp</Box>
    </>
  )
}
export default App
