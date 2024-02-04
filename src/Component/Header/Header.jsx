import React, { useState } from 'react'
import {  MdOutlineShoppingCart } from "react-icons/md";
import {  Box, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay,   Flex,   Heading,   Input,   Menu,  MenuItem,  Stack,  Text,  useDisclosure, useMediaQuery } from '@chakra-ui/react';
import { FaSignInAlt, FaUserPlus, FaBars, FaGem, FaTshirt, FaHome, FaRing, FaGamepad, FaPaintBrush, FaTools, FaSearch, FaPhone, FaFacebook, FaTwitter, FaLinkedin, FaPinterest, FaFlagUsa, FaUser,} from 'react-icons/fa';
import { CiHeart, CiShoppingBasket } from "react-icons/ci";
import './header.css'


import { Button,  } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import MenuProfile from './MenuProfile';
function Header() {

  
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement] = useState('left')
  const [ setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { label: 'Jewelry & Accessories', icon: <FaGem /> },
    { label: 'Clothing & Shoes', icon: <FaTshirt /> },
    { label: 'Home & Living', icon: <FaHome /> },
    { label: 'Wedding & Party', icon: <FaRing /> },
    { label: 'Toys & Entertainment', icon: <FaGamepad /> },
    { label: 'Art & Collectibles', icon: <FaPaintBrush /> },
    { label: 'Craft Supplies & Tools', icon: <FaTools /> }
  ];



  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

const menuItems = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'Shop',
    link: '/',
  },
  {
    label: 'Contact',
    link: '/',
  },
  {
    label: ' Supports ',
    link: '/',
  },
  // Add more menu items as needed
];


  return (
    <header className="">
      <Box bg="gray.800" p="1" color="white" borderBottom="1px solid" borderColor="gray.500">
      <Flex align="center" justify="space-between" ml="10">
        <Flex gap="5">
          <Text fontWeight="semibold">hello.ZephyrMart@yahoo.com</Text>
          <Text fontWeight="semibold">+008123333322</Text>
        </Flex>
        <Flex gap="5" align="center" justify="center" marginRight={'20'}>
          <Flex gap="3" align="center">
            <span> <FaFacebook /> </span>
            <span> <FaTwitter /> </span>
            <span> <FaLinkedin /> </span>
            <span> <FaPinterest /> </span>
          </Flex>
          <Flex gap="3" align="center">
            <Text>English</Text>
            <Link className="login flex gap-2 " textDecoration="none">
                <FaUser style={{marginTop:'5px'}}/>
              <button className=''>  Login</button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Box>






    <div className=" bg-black   px-4 sm:px-6 lg:px-8 text-white ">
    <Flex height="16" alignItems="center" justifyContent="space-between">
      <Flex alignItems="center" gap="12">
        {isMobile && (
          <Button colorScheme="pink" onClick={onOpen} className="text-black-300">
            <span>
              <FaBars />
            </span>
          </Button>
        )}

        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader bg="pink">
            <Heading textAlign={'center'} as="div" size={'xl'} fontFamily="mono" fontWeight="bold" _hover={{ color: 'pink.700' }}>
  ZephyrMart
</Heading>
            </DrawerHeader>
            <DrawerBody>
              <Menu>
                {options.map((option, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => {
                      selectOption(option);
                    }}
                    className={`block px-5 py-3 text-white hover:bg-pink-500 ${
                      selectedOption === option ? 'text-indigo-500' : ''
                    }`}
                  >
                    <span className="mr-2">{option.icon}</span>
                    <span>{option.label}</span>
                  </MenuItem>
                ))}
              </Menu>
            </DrawerBody>
            <DrawerFooter borderTopWidth="1px">
              <Link to="/Singin">
                <Button variant="outline" mr={3}>
                  <FaSignInAlt size={20} style={{ marginRight: '8px' }} /> Log in
                </Button>
              </Link>
              <Link to="/Singup">
                <Button colorScheme="blue">
                  <FaUserPlus size={20} style={{ marginRight: '8px' }} /> Sign up
                </Button>
              </Link>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

       
      </Flex>

     
      <Heading as="div" display={{ base: 'none', md: 'block' }} size={{ base: 'sm', md: 'xl', lg: '2xl' }} fontFamily="mono" fontWeight="bold" _hover={{ color: 'pink.700' }}>
  ZephyrMart
</Heading>
  
     

<Flex alignItems="center" gap={4} ml={{ base: '5%', md: 'auto' }}>
  <label htmlFor="UserEmail" className="relative block overflow-hidden " >
    <Input
      variant="flushed"
      focusBorderColor="pink.500"
      placeholder="Search"
      size="lg"
      id="UserEmail"
    />
    <Stack  className="absolute inset-y-0 end-0 grid  w-10 place-content-center">
      <Button
        type="button"
        colorScheme="white"
        _hover={{ color: 'pink.600' }}
      >
        <span className="sr-only">Search</span>
        <Box ml="2">
        <FaSearch size={'20px'} boxSize={6} strokeWidth={1.5} />
      </Box>
      </Button>
    </Stack>
  </label>
</Flex>

      <Flex justifyContent="space-between" align="center" margin="2rem">
        <MenuProfile />
        <Flex gap={4}>
          <MdOutlineShoppingCart style={{ marginLeft: '2.5rem' }} />
          <CiHeart style={{ margin: '0 0.5rem' }} />
        </Flex>
      </Flex>
    </Flex>
    </div>

    <div className="hidden md:block bg-black px-4 sm:px-6 lg:px-8 text-white">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
      <ul className="flex items-center gap-6 text-sm">
    {options.map((option, index) => (
      <li key={index}>
        <a
          href={option.link}
          onClick={() => selectOption(option)}
          className={`inline-flex items-center px-4 py-3 text-white hover:bg-pink-500 ${
            selectedOption === option ? 'text-indigo-500' : ''
          }`}
        >
          <span className="mr-2">{option.icon}</span>
          <span>{option.label}</span>
        </a>
      </li>
    ))}
  </ul>

       
      </div>
    </div>
  </div>
    

      

    {/* hero section */}
    <div className="hero-section">
      <div className="left-content">
        <h1>Express Yourself in Every Thread</h1>
        <h2>Discover Fusion Fashion: Unleash Your Style with Our Artistic T-Shirt Collection</h2>

        <Button leftIcon={<CiShoppingBasket/>}  variant='solid'   color='#4b4f56'
_hover={{ bg: 'pink' }} >
Explore the Collection
</Button>
      
   
      </div>
    </div>
    
    


  </header>
  )
}

export default Header

