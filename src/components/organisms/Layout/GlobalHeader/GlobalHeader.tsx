import React from 'react'

import MenuIcon from '@mui/icons-material/Menu'
import AppBar, { AppBarProps } from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import LocalLibraryTwoToneIcon from '@mui/icons-material/LocalLibraryTwoTone';

const drawerWidth = 340

type Props = {
};

const GlobalHeader = ({ }: Props) => {
  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <LocalLibraryTwoToneIcon />
        <div style={{ flexGrow: 1 }}>
          shishiapps
        </div>
      </Toolbar>
    </StyledAppBar>
  )
}

const StyledAppBar = styled(AppBar, {})<AppBarProps & {}>(({ theme }) => ({
  // marginLeft: open ? drawerWidth : 0,
  // width: open ? `calc(100% - ${drawerWidth}px)` : '100%',
  zIndex: theme.zIndex.drawer + 1,
  color: theme.palette.grey[800],
  backgroundColor: theme.palette.primary.main,
  boxShadow: 'none',

  transition: 'all 0.5s 0s ease',
}))

export default GlobalHeader
