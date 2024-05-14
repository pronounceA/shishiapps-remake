import React from 'react'

import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded'
import Box from '@mui/material/Box'
import Drawer, { DrawerProps } from '@mui/material/Drawer'
import List from '@mui/material/List'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'

import { PagePath } from '../../../../pagePath'

import DrawerHeader from './DrawerHeader'
import ListItemLink from './ListItemLink'

const drawerWidth = 340

export type Props = {
};

const GlobalSidebar = ({ }: Props) => {
  const { t } = useTranslation('layout')

  return (
    <StyledDrawer variant="permanent">
      <DrawerHeader>
        <Typography
          component="h1"
          variant="h3"
          color="inherit"
          background-color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          primeAI
        </Typography>
      </DrawerHeader>

      <Box sx={{ flexGrow: 1, overflow: 'auto', ml: 5 }}>
        <List>
          <ListItemLink icon={<DashboardRoundedIcon />} text={t('sidebar.dashboard')} href={PagePath.DASHBOARD} />
        </List>
      </Box>
    </StyledDrawer>
  )
}

const StyledDrawer = styled(Drawer, {})<DrawerProps>(({ theme, open }) => ({
  width: open ? drawerWidth : 0,
  flexShrink: 0,
  transition: 'all 0.5s 0s ease',

  '> .MuiDrawer-paper': {
    width: open ? drawerWidth : 0,
    boxSizing: 'border-box',
    color: theme.palette.grey[800],
    backgroundColor: theme.palette.background.default,
    borderRight: 'none',
  },
}))

export default GlobalSidebar
