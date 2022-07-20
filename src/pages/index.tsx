import type { NextPage } from "next";

import { Box, Flex, Divider, Heading, useBreakpointValue } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { BannerIndex } from "../components/BannerIndex";
import { Categories } from "../components/Categories";
import { Slider } from "../components/Slider";

const Home: NextPage = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Header />
      <BannerIndex />

      <Box className="container">
        <Flex w="100%" align="center" gap={ isWideVersion ? 'none' : '4' } flexWrap={ isWideVersion ? 'unset' : 'wrap' } justifyContent={ isWideVersion ? 'space-between' : 'space-evenly'} mb="80px">
          <Categories image="images/cocktail.svg" title="vida noturna" />
          <Categories image="images/surf.svg" title="praia" />
          <Categories image="images/building.svg" title="moderno" />
          <Categories image="images/museum.svg" title="clássico" />
          <Categories image="images/earth.svg" title="e mais..." />
        </Flex>

        <Divider
          orientation="horizontal"
          bg='gray.900'
          border='2px'
          borderColor='gray.900'
          w="90px"
          mx="auto"
        />

        <Heading
          textAlign="center"
          fontWeight="medium"
          fontSize={{ base: '2xl', md: '4xl' }}
          lineHeight="base"
          my="52px"
        >
          Vamos nessa? <br />
          Então escolha seu continente
        </Heading>

      </Box>
        <Box w='100%' mb={{ base: '6', md: '40px'}} px={{base: '0', md: '100px'}} >
          <Slider />
        </Box>
    </>
  );
};

export default Home;
