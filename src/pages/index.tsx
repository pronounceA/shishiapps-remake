import React from 'react'

import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import { PagePath } from '../pagePath'

const RootPage: NextPage = () => {
  const router = useRouter()

  const setRedirectUrl = () => {
    const redirectUrl: string =  PagePath.DASHBOARD
    return redirectUrl
  }

  React.useEffect(() => {
      const redirectUrl: string = setRedirectUrl()
      router.push(redirectUrl)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}

export default RootPage
