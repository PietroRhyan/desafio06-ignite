import type { NextPage } from "next";

import { Box, Flex, Divider, Heading } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { BannerIndex } from "../components/BannerIndex";
import { Category } from "../components/Category";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <BannerIndex />

      <Box className="container">
        <Flex w="100%" align="center" justifyContent="space-between" mb="80px">
          <Category image="images/cocktail.svg" title="vida noturna" />
          <Category image="images/surf.svg" title="praia" />
          <Category image="images/building.svg" title="moderno" />
          <Category image="images/museum.svg" title="clássico" />
          <Category image="images/earth.svg" title="e mais..." />
        </Flex>

        <Divider
          orientation="horizontal"
          bg='gray.900'
          border='2px'
          borderColor='gray.900'
          w="90px"
          mx="auto"
          mb="52px"
        />

        <Heading
          textAlign="center"
          fontWeight="medium"
          fontSize="4xl"
          lineHeight="base"
        >
          Vamos nessa? <br />
          Então escolha seu continente
        </Heading>
      </Box>
    </>
  );
};

export default Home;
