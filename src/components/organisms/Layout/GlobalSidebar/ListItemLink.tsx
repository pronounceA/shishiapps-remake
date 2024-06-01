import React from 'react'

import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Link from 'next/link'

type Props = {
  icon?: React.ReactElement;
  text: string;
  href: string;
}

const ListItemLink = ({ icon, text, href }: Props) => {
  return (
    <Link href={href} passHref>
      <ListItem button component="a">
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={text} />
      </ListItem>
    </Link>
  )
}

export default ListItemLink
