import React from 'react'

import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { i18n } from 'i18next'

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return  (
    <>shishiapp</>
  )
}
export default App
