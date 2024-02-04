import React from 'react';
import { Text } from '@chakra-ui/react';

const NavMenu = () => {
  return (
    <>
      <Text
        as="a"
        href="/"
        px={3}
        py={2}
        rounded="md"
        color="gray.900"
        fontWeight="medium"
        _hover={{
          bg: 'pink.500',
          color: 'white',
        }}
      >
        ALL PRODUCT
      </Text>
      <Text
        as="a"
        href="/"
        px={3}
        py={2}
        rounded="md"
        color="#636363"
        _hover={{
          bg: 'pink.500',
          color: 'white',
        }}
      >
        T-SHIRT
      </Text>
      <Text
        as="a"
        href="/"
        px={3}
        py={2}
        rounded="md"
        color="#636363"
        _hover={{
          bg: 'pink.500',
          color: 'white',
        }}
      >
        HOODIES
      </Text>
      <Text
        as="a"
        href="/"
        px={3}
        py={2}
        rounded="md"
        color="#636363"
        _hover={{
          bg: 'pink.500',
          color: 'white',
        }}
      >
        JACKET
      </Text>
    </>
  );
};

export default NavMenu;
