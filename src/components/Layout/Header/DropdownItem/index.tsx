import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import { Box, Menu, MenuButton, MenuItem, MenuList, } from '@chakra-ui/react'

interface Props {
  href?: string;
  label: string;
  onClick?: () => boolean;
  isActive?: boolean;
}

export const DropdownItem: FunctionComponent<Props> = ({ href, label, onClick, isActive }) => {
  return (
    <Menu>
      <MenuButton
        as={Box}
        onClick={onClick}
        fontWeight="bold"
        transition={'all .3s ease'}
        _hover={{ textDecoration: 'none', color: "black", }}>
        {label}
      </MenuButton>

      <MenuList isActive={isActive}>
        <Link to={`/meet-the-buses/ada`}>
          <MenuItem>Ada</MenuItem>
        </Link>

        <Link to={`/meet-the-buses/hudson`}>
          <MenuItem>Hudson</MenuItem>
        </Link>
      </MenuList>
    </Menu>
  )
}
