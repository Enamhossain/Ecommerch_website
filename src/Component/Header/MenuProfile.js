import { Button, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { FaSignInAlt, FaUser, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function MenuProfile() {
  return (
    <Menu   >
      <MenuButton as={Button} _hover={{ color: 'pink.400' }} >
        <FaUser size={15} />
      </MenuButton>
      <MenuList textColor={'black'}>
        <MenuGroup title='Profile' >
          <MenuItem><Link to="/Singin">
           
              <FaSignInAlt size={20} style={{ marginRight: '4px' }} /> Log in
          
          </Link></MenuItem>
          <MenuItem> <Link to="/Singup">
            
              <FaUserPlus size={20} style={{ marginRight: '4px' }} /> Sign up
            
          </Link> </MenuItem>


        </MenuGroup>
        <MenuDivider />
        <MenuGroup title='Help'>
          <MenuItem>Docs</MenuItem>
          <MenuItem>FAQ</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  )
}
