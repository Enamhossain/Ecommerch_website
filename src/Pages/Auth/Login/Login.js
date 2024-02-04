import { Box, Button, Flex, Heading, Input,  Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaApple, FaFacebook } from 'react-icons/fa'
import { AiOutlineGoogle } from 'react-icons/ai';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../../../redux/api/usersApiSlice';
import { setCredentials } from '../../../redux/features/auth/authSlice';
import toast from 'react-hot-toast';
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  // const { search } = useLocation();
  // const sp = new URLSearchParams(search);
  // const redirect = sp.get("redirect") || "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      console.log(res);
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };


    return (
        <>

<Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bg="pink.100" // Set the background color to a light pink
    >
      <Box width="500px" p={10} borderWidth={1} borderRadius={8} boxShadow="md" bg="white">
        <Heading mb={4} textAlign="center" color="pink.400">
          Hello
        </Heading>
        <Text mb={8} color="gray.500" textAlign="center">
          Sign in to or <Link to='/Singup'> create an account </Link>
        </Text>
        <form onSubmit={submitHandler}>
          <Input
            type="text"
            placeholder="Email"
            mb={4}
            size="lg"
            borderRadius={4}
            value={email}
            onChange={(e) =>setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            mb={6}
            size="lg"
            borderRadius={4}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
             disabled={isLoading}
             colorScheme="pink" type="submit" width="full" mb={4}
           >
             {isLoading ? "Signing In..." : "Sign In"}


           {isLoading &&  <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-pink-500 border-opacity-50"></div>}
          </Button>
        
           
        </form>
        <Text mt={4} textAlign="center" color="gray.500">
          Or log in with
        </Text>
        <Stack justifyContent="center">
          <Button colorScheme='facebook' leftIcon={<FaFacebook />}>
            Facebook
          </Button>

          <Button
          
            leftIcon={<AiOutlineGoogle />}
            width="full"
            borderRadius={4}
            mb={2}
          >
            Continue with Google
          </Button>

          <Button
            
            leftIcon={<FaApple />}
            borderRadius={4}
          >
            Apple
          </Button>
        </Stack>
      </Box>
    </Box>

            <Flex
                as="footer"
                align="center"
                justify="center"
                direction="column"
                mt={8}
                p={4}
                bgColor="gray.100"
                borderTopWidth={1}
                borderColor="gray.300"
            >
                <Text fontSize="sm" color="gray.500" textAlign="center">
                    © 2023 Your Company. All rights reserved.
                </Text>
                <Link color="blue.500" href="#" mt={2} fontSize="sm" textAlign="center">
                    Privacy Policy
                </Link>
            </Flex>
        </>
    )
}
