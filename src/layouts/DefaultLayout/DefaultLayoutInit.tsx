import React from 'react'

import { Box, Toolbar, Container, Theme } from '@mui/material'
import { useRouter } from 'next/router'

// import InitialForTest from '@/components/molecules/InitialForTest/InitialForTest'
import GlobalHeader from '@/components/organisms/Layout/GlobalHeader'
import GlobalSidebar from '@/components/organisms/Layout/GlobalSidebar'
// import SessionUtils from 'utils/SessionUtil/SessionUtils'


type Props = {
  children?: React.ReactNode | undefined
}

const DefaultLayout = ({ children }: Props) => {
  const router = useRouter()
  // const { SetUrlSession } = SessionUtils()
  // SetUrlSession(router.pathname)

  return (
    <>
      <Box sx={{ display: 'flex', height: '100%' }}>
        <GlobalHeader />
        <GlobalSidebar isOpen={true} />
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          height: '100vh',
          bgcolor: (theme: Theme) => theme.palette.background.main,
        }}>
          <Toolbar />
          <Box sx={{ position: 'relative', height: '100%', Width: '100%', overflow: 'auto' }}>
            <Container component="main" maxWidth='lg' sx={{
              position: 'absolute',
              maxWidth: '100% !important',
              top: 0, bottom: 0, left: 0, right: 0,
              padding: '32px 42px !important'
            }}>
              {children}
            </Container>
          </Box>
        </Box>
      </Box>
      {/* <InitialForTest></InitialForTest> */}
    </>
  )
}

export default DefaultLayout
