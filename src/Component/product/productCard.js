import React, {  useState } from 'react'


import { Box, Button, Container, Flex, Heading,Input,InputGroup,InputLeftElement,Text,Collapse, extendTheme, Grid, Image,  useBreakpointValue,  } from '@chakra-ui/react';
import { FaBars, FaTimes } from 'react-icons/fa';
import NavMenu from './Navmenu';

function ProductCard() {

  const [isOpen, setOpen] = useState(false);

  const theme = extendTheme({
    fonts: {
      body: "'Poppins', sans-serif",
      heading: "'Poppins', sans-serif",
      // You can add more font styles as needed
    },
  });

 
  const isMobile = useBreakpointValue({ base: true, md: false });
    const products = [ 
        { id: 1, name: "Adicolor Classics Joggers", category:'Dress', image: 'https://images.unsplash.com/flagged/photo-1585052201332-b8c0ce30972f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: "$29.99" },
        { id: 2, name: "Nike Sportswear Futura Luxe", category:'Bag', image: 'https://plus.unsplash.com/premium_photo-1661497555465-93a250c0bbf1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJhZ3xlbnwwfHwwfHx8MA%3D%3D', price: "$39.99" },
        { id: 3, name: "Geometric print Scarf", category:'Scarf', image: 'https://images.pexels.com/photos/8063396/pexels-photo-8063396.jpeg?auto=compress&cs=tinysrgb&w=600', price: "$49.99" },
        { id: 4, name: "Yellow Reserved Hoodie", category:'dress', image: 'https://images.unsplash.com/photo-1586078130702-d208859b6223?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhc2lvbiUyMG1vZGVsfGVufDB8fDB8fHww', price: "$49.99" },
        { id: 3, name: "Geometric print Scarf", category:'Scarf', image: 'https://images.pexels.com/photos/8063396/pexels-photo-8063396.jpeg?auto=compress&cs=tinysrgb&w=600', price: "$49.99" },
        { id: 4, name: "Yellow Reserved Hoodie", category:'dress', image: 'https://images.unsplash.com/photo-1586078130702-d208859b6223?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhc2lvbiUyMG1vZGVsfGVufDB8fDB8fHww', price: "$49.99" },
        { id: 3, name: "Geometric print Scarf", category:'Scarf', image: 'https://images.pexels.com/photos/8063396/pexels-photo-8063396.jpeg?auto=compress&cs=tinysrgb&w=600', price: "$49.99" },
        { id: 4, name: "Yellow Reserved Hoodie", category:'dress', image: 'https://images.unsplash.com/photo-1586078130702-d208859b6223?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhc2lvbiUyMG1vZGVsfGVufDB8fDB8fHww', price: "$49.99" },
        // Add more product data as needed
      ];
     

   
  
  return (
  
  


    <Box p={8}>
    <Heading mb={8} textAlign="center">
    Or subscribe to the newsletter
    </Heading>
    

    
   <Container maxW='1270px' theme={theme}>
   <div className="mt-8 sm:flex sm:items-center sm:justify-between">
   <Flex
        pb={{ base: 2, md: 0 }}
        align="center"
        justify={{ base: 'space-between', md: 'space-between' }}
        fontFamily="medium"
      >
        {isMobile ? (
          <Button
            display={{ base: 'inline-flex', md: 'none' }}
            h={10}
            w={10}
            align="center"
            justify="center"
            color="gray.600"
            transition="background-color 0.3s, color 0.3s"
            _hover={{
              bg: 'gray.50',
              color: 'gray.700',
            }}
            onClick={() => setOpen(!isOpen)}
          >
           {isOpen ? <FaTimes /> : <FaBars />}
          </Button>
        ) : (
          <NavMenu/>
        )}

 
     <Collapse in={isOpen} animateOpacity>
          <Flex
            display={{  base: isOpen ? 'flex' : 'none', md: 'none', }}
            mt={{ base: 2, md: 0 }} // Adjust margin-top value for better spacing
            ml={{ base: 0, md: -3 }} // Adjust the margin-left value
            alignItems="center"
          > 
            <NavMenu/>
          </Flex>
          </Collapse>
   
         
        
           

        
      </Flex>

      <Box position="relative">
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
            <Text fontSize="sm" fontWeight="medium">
              Price
            </Text>
            {/* CiMemoPad was not provided in the original code, you can replace it with your desired icon */}
            {/* <CiMemoPad boxSize={4} transition="transform 0.3s" /> */}
          </summary>

          <Collapse in={true} ml={[-3, null, null, -229]}>
            <Box className="z-50 absolute">
              <Box width="96" rounded="md" borderWidth="1px" bg="white" ml={[-4, null, null, -305]}>
                <header className="flex items-center justify-between p-4">
                  <Text fontSize="sm" color="gray.700">
                    The highest price is $600
                  </Text>

                  <Button type="button" fontSize="sm" color="gray.900" textDecoration="underline" textDecorationOffset="4">
                    Reset
                  </Button>
                </header>

                <Box borderTopWidth="1px" borderColor="gray.200" p={4}>
                  <Box display="flex" justifyContent="space-between" gap={4}>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none" fontSize="sm" color="gray.600" children="$" />
                      <Input
                        type="number"
                        id="FilterPriceFrom"
                        placeholder="From"
                        rounded="md"
                        borderWidth="1px"
                        borderColor="gray.200"
                        shadow="sm"
                        fontSize="sm"
                      />
                    </InputGroup>

                    <InputGroup>
                      <InputLeftElement pointerEvents="none" fontSize="sm" color="gray.600" children="$" />
                      <Input
                        type="number"
                        id="FilterPriceTo"
                        placeholder="To"
                        rounded="md"
                        borderWidth="1px"
                        borderColor="gray.200"
                        shadow="sm"
                        fontSize="sm"
                      />
                    </InputGroup>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Collapse>
        </details>
      </Box>
    </div>
   

            {/* product card */}
      <Grid templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={4} mt={3}>
      {products.map((product) => (
        <Box key={product.id}>
          <a href='/' className="group block overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-110 sm:h-[450px]"
            />
            <Box className="relative bg-white pt-3">
              <Heading as="h3" fontSize="xs" color="gray.700" className="group-hover:underline group-hover:underline-offset-4">
                {product.name}
              </Heading>
              <Text mt={2} color="" className='flex justify-between font-normal'>
                <span className="text-gray-400  font-style-italic ">{product.category}</span>
                <span className="tracking-wider text-gray-950">{product.price}</span>
              </Text>
            </Box>
          </a>
        </Box>
      ))}
    </Grid>
   </Container>
  

      
    
  </Box>
  )
}

export default ProductCard