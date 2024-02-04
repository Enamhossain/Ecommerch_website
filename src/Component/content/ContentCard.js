import React from 'react'
import { Box, Text, Link } from '@chakra-ui/react';

export default function ContentCard({allData}) {
    console.log(allData)
  return (


<Link href="/" className="group relative block">
      <Box className="relative h-[350px] sm:h-[450px] font-bold">
        <Box  style={{
        borderImage: 'linear-gradient(rgba(170, 10, 149, 0.3), #131313)'
        ,filter: "contrast(150%)"
        
      }}
          backgroundImage={`url(${allData.Image1})`}
          alt="pic"
          className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0 transition-opacity filter drop-shadow-lg"
        />

        <Box
          backgroundImage={`url(${allData.Image2})`}
          borderImage="linear-gradient(rgba( 0, 10, 10, .3), #131313)"          
          borderImageSlice="1"
          borderWidth="2px"
          alt="pic"
          style={{ filter: "contrast(150%)" }}
          className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity filter drop-shadow-lg"
        />
      </Box>

      <Box className="absolute inset-0 flex flex-col items-start justify-end p-6 font-bold">
        <Text
          className="text-white group-hover:underline group-hover:underline-offset-4 hover:text-pink-500"
          fontSize="2xl" // Adjust the font size as needed
        >
          {allData.title}
        </Text>

        <Text
          className="mt-1.5 max-w-[45ch] text-xs text-gray-100 hover:text-gray-200 font-semibold"
          fontSize="xs" // Adjust the font size as needed
        >
          {allData.content}
        </Text>

        <Box
          className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white hover:text-pink-500"
          _hover={{
            filter: 'brightness(1.2)', // Adjust the brightness as needed
          }}
          transition="filter 0.3s"
        >
          Shop Now
        </Box>
      </Box>
    </Link>
    
  )
}
