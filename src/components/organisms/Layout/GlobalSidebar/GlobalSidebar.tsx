import React from 'react'

import Box from '@mui/material/Box'
import Drawer, { DrawerProps } from '@mui/material/Drawer'
import List from '@mui/material/List'
import { styled } from '@mui/material/styles'
import { useTranslation } from 'react-i18next'
import ListItemLink from './ListItemLink'
import { Collapse, ListItemButton, ListItemText, Toolbar } from '@mui/material'
import { PagePath } from '@/pagePath'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import PersonIcon from '@mui/icons-material/Person'

const drawerWidth = 340

export type Props = {
  isOpen: boolean;
};

const GlobalSidebar = ({ isOpen }: Props) => {
  const { t } = useTranslation('layout')

  const [isOpenStudentList, setIsOpenStudentList] = React.useState<boolean>(false);

  const ChangeStudentList = () => {
    setIsOpenStudentList(!isOpenStudentList);
  }

  return (
    <StyledDrawer variant="permanent" open={isOpen}>
      <Toolbar />
      <Box sx={{ flexGrow: 1, overflow: 'auto', ml: 2 }}>
        <List>
          <ListItemButton onClick={ChangeStudentList}>
            <ListItemText primary='生徒' />
            {isOpenStudentList ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={isOpenStudentList} timeout={0}>
            <List sx={{ ml: 2 }}>
              <ListItemLink icon={<PersonIcon />} text='生徒一覧' href={PagePath.STUDENTS} />
            </List>
          </Collapse>
        </List>
      </Box>
    </StyledDrawer>
  )
}

const StyledDrawer = styled(Drawer, {})<DrawerProps>(({ theme, open }) => ({
  width: open ? drawerWidth : 0,
  flexShrink: 0,
  transition: 'all 0.5s 0s ease',
  display: 'flex',


  '> .MuiDrawer-paper': {
    width: open ? drawerWidth : 0,
    boxSizing: 'border-box',
    color: theme.palette.grey[800],
    backgroundColor: theme.palette.background.default,
    borderRight: 'none',
  },
}))

export default GlobalSidebar
