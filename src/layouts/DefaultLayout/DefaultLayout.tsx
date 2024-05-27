import React from 'react'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'

import GlobalHeader from '@/components/organisms/Layout/GlobalHeader'
import GlobalSidebar from '@/components/organisms/Layout/GlobalSidebar'

interface Props {
  children?: React.ReactNode | undefined
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <GlobalHeader />
      <GlobalSidebar isOpen={ true } />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        height: '100vh',
        bgcolor: (theme) => theme.palette.background.main,
      }}>
        <Toolbar />
        <Box sx={{ position: 'relative', height: '100vh', overflow: 'auto' }}>
          <Container component="main" maxWidth='lg' sx={{
            display: 'flex',
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
  )
}

export default DefaultLayout
