import React from 'react'
import { Flex, Box, Link } from "@chakra-ui/react";
import ContentCard from './ContentCard'
import Lottie from 'lottie-react';
import animationData1 from '../../Images/brandIcon/addias.json';
import animationData2 from '../../Images/brandIcon/fashionbrand.json';
import animationData3 from '../../Images/brandIcon/Zara.json';
import animationData4 from '../../Images/brandIcon/GB.json';
import animationData5 from '../../Images/brandIcon/polo.json';
import animationData6 from '../../Images/brandIcon/Vans.json';
import { extendTheme } from '@chakra-ui/react';


function Content() {
  const theme = extendTheme({
    fonts: {
      body: "'Poppins', sans-serif",
      heading: "'Poppins', sans-serif",
      // You can add more font styles as needed
    },
  });

  const divStyle = {
    height: '100px', // Set the desired height
    width: '100px',  // Set the desired width
  };

  const animationLinks = [
    { animationData: animationData1, link: "/animation1" },
    { animationData: animationData2, link: "/animation2" },
    { animationData: animationData3, link: "/animation2" },
    { animationData: animationData4, link: "/animation2" },
    { animationData: animationData5, link: "/animation2" },
    { animationData: animationData6, link: "/animation2" },
    // Add more animation data and links
  ];



  const cards = [
    {
      title: 'Skinny Jeans Blue',
      content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi dicta impeditaperiam ipsum',
      Image1: 'https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&w=600',
      Image2: 'https://images.pexels.com/photos/346748/pexels-photo-346748.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Skinny Jeans Blue',
      content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi dicta impeditaperiam ipsum',
      Image1: 'https://i.ibb.co/5BpHL7b/img1.jpg',
      Image2: 'https://i.ibb.co/Hh8GjTB/img2.jpg'
    },
    {
      title: 'Skinny Jeans Blue',
      content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi dicta impeditaperiam ipsum',
      Image1: 'https://i.ibb.co/Dz5QDjz/img3.jpg',
      Image2: 'https://i.ibb.co/dKzsKLz/img4.jpg'
    },
   

    // Add more cards as needed
  ];

  return (
    <Flex direction="column">

    {/* Lottie animations */}
    <div className="flex flex-wrap justify-center lg:justify-between items-center mt-8  container mx-auto">
      <div style={divStyle}>
      <Lottie
        animationData={animationData1}
        loop={true}
        autoplay={true}
      />
    </div>
      <div style={divStyle}>
      <Lottie
        animationData={animationData2}
        loop={true}
        autoplay={true}
      />
    </div>
      <div style={divStyle}>
      <Lottie
        animationData={animationData3}
        loop={true}
        autoplay={true}
      />
    </div>
      <div style={divStyle}>
      <Lottie
        animationData={animationData4}
        loop={true}
        autoplay={true}
      />
    </div>
      <div style={divStyle}>
      <Lottie
        animationData={animationData5}
        loop={true}
        autoplay={true}
      />
    </div>
      <div style={divStyle}>
      <Lottie
        animationData={animationData6}
        loop={true}
        autoplay={true}
      />
    </div>






      
      </div>





    {/* Content Section */}
    <section  theme={theme.heading}>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 filter brightness-1">

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-white font-extrabold">

            {
              cards.map(allData => <ContentCard
                key={allData._id}
                allData={allData}
              ></ContentCard>)
            }
          </ul>
        </div>
      </section>
  </Flex>
  )
}

export default Content
