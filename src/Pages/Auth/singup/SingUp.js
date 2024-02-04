import {
  Box,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  HStack,
  IconButton,
  Text,


} from '@chakra-ui/react';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';

import React from 'react'
import { Link } from 'react-router-dom';


function SingUp() {
  const handleSocialMediaSignUp = (provider) => {
    // Implement social media signup logic here
    console.log(`Signing up with ${provider}`);
  };


  return (
    <>
      <Flex
        align="center"
        justify="center"
        minH="100vh"
        bg="pink.100" // Set the background color to a light pink
      >
        <Box p={12} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg" bg="white">
          <Heading mb={4} textAlign="center" color="pink.500">Create an Account</Heading>
          <Text mb={8} textAlign="center" color="gray.600">Join our community and start shopping!</Text>
          <Text mb={8} textAlign="center" color="gray.600">  Already member <Link to='/singin'>Sing In</Link> </Text>
          <form>
            <Flex direction={{ base: "column", md: "row" }} mb={4}>
              <FormControl mr={{ base: 0, md: 4 }} mb={{ base: 4, md: 0 }}>
                <FormLabel>First Name</FormLabel>
                <Input type="text" placeholder="First Name" />
              </FormControl>
              <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input type="text" placeholder="Last Name" />
              </FormControl>
            </Flex>
            <FormControl mb={4}>
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder="Enter your email" />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="Enter your password" />
            </FormControl>
            <Button colorScheme="pink" type="submit" width="full" mb={4}>
              Sign Up
            </Button>
          </form>
          <Text mb={4} textAlign="center">Or sign up with</Text>
          <HStack spacing={4} justify="center">
            <IconButton
              icon={<FaFacebook />}
              onClick={() => handleSocialMediaSignUp('Facebook')}
            />
            <IconButton
              icon={<FaGoogle />}

              onClick={() => handleSocialMediaSignUp('Google')}
            />
            <IconButton
              icon={<FaTwitter />}

              onClick={() => handleSocialMediaSignUp('Twitter')}
            />
          </HStack>
        </Box>
      </Flex>

    </>
  )
}

export default SingUp