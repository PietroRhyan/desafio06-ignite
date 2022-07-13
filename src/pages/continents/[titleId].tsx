import { GetStaticProps, GetStaticPaths } from "next";

import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { ContinentInfo } from "../../components/ContinentInfo";
import { Countries } from "../../components/Countries";

interface ContinentPageProps {
  selectedContinent: {
    title: string;
    intro: string;
    img: string;
    countries: [
      {
        country_img: string;
        country_name: string;
        city: string;
        country_icon: string;
      },
    ];
  };
}

export default function ContinentPage({
  selectedContinent,
}: ContinentPageProps) {
  return (
    <>
      <Header />

      <Box w="100%" h="500px" position="relative">
        <Image
          src={selectedContinent.img}
          w="100%"
          h="500px"
          objectFit="cover"
          objectPosition="center"
          filter="brightness(0.6)"
        />
        <Heading
          position="absolute"
          left="140px"
          bottom="60px"
          fontSize="5xl"
          fontWeight="bold"
          color="gray.100"
        >
          {selectedContinent.title}
        </Heading>
      </Box>

      <Box className="container">
        <Flex w='100%' my='80px' justifyContent='space-between'>
          <Box w='600px'>
            <Text fontWeight='normal' fontSize='2xl' color='gray.900' textAlign='justify'>
              {selectedContinent.intro}
            </Text>
          </Box>

          <Flex alignItems='center' justifyContent='flex-end' gap='12'>
            <ContinentInfo value={50} title='países' />
            <ContinentInfo value={60} title='línguas' />
            <ContinentInfo value={27} title='cidades +100' hasTooltip />
          </Flex>
        </Flex>

        <Heading fontSize='4xl' fontWeight='medium'>Cidades +100</Heading>
        <Flex>
          {selectedContinent.countries.map((country) => (
            <Countries key={country.city} image={country.country_img} name={country.country_name} city={country.city} icon={country.country_icon}/>
          ))}
        </Flex>
      </Box>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const slides = {
    americaNorte: {
      title: "América do Norte",
      intro:
        "A América do Norte é um subcontinente que compreende a porção setentrional do continente americano. Existem duas formas de classificar esse continente: a primeira considera que a América do Norte é apenas a parte mais setentrional da América, separada da América Central na fronteira entre o México e a Guatemala, a segunda classificação reconhece apenas uma América do Norte e uma América do Sul.",
      img: "/images/northAmerica.jpg",
      countries: [
        { country_img: "images/ottawa.jpg", country_name: "Canadá", city: "Ottawa", country_icon: "icons/canada.png"},
      ],
    },
    americaCentral: {
      title: "América Central",
      intro: "",
      img: "/images/centralAmerica.jpg",
      countries: [
        { country_img: "", country_name: "", city: "", country_icon: "" },
      ],
    },

    americaSul: {
      title: "América do Sul",
      intro: "",
      img: "/images/southAmerica.jpg",
      countries: [
        { country_img: "", country_name: "", city: "", country_icon: "" },
      ],
    },

    asia: {
      title: "Ásia",
      intro: "",
      img: "/images/asia.jpg",
      countries: [
        { country_img: "", country_name: "", city: "", country_icon: "" },
      ],
    },

    africa: {
      title: "Africa",
      intro: "",
      img: "/images/africa.jpg",
      countries: [
        { country_img: "", country_name: "", city: "", country_icon: "" },
      ],
    },

    europa: {
      title: "Europa",
      intro: "",
      img: "/images/europe.jpg",
      countries: [
        { country_img: "", country_name: "", city: "", country_icon: "" },
      ],
    },

    oceania: {
      title: "Oceania",
      intro: "",
      img: "/images/oceania.jpg",
      countries: [
        { country_img: "", country_name: "", city: "", country_icon: "" },
      ],
    },
  };

  const urlTitleId = params.titleId;

  function getCountry() {
    if (urlTitleId === "america-do-norte") {
      const continent = {
        title: slides.americaNorte.title,
        intro: slides.americaNorte.intro,
        img: slides.americaNorte.img,
        countries: slides.americaNorte.countries,
      };

      return continent;
    }

    if (urlTitleId === "america-central") {
      const continent = {
        title: slides.americaCentral.title,
        intro: slides.americaCentral.intro,
        img: slides.americaCentral.img,
        countries: slides.americaCentral.countries,
      };

      return continent;
    }

    if (urlTitleId === "america-do-sul") {
      const continent = {
        title: slides.americaSul.title,
        intro: slides.americaSul.intro,
        img: slides.americaSul.img,
        countries: slides.americaSul.countries,
      };

      return continent;
    }

    if (urlTitleId === "asia") {
      const continent = {
        title: slides.asia.title,
        intro: slides.asia.intro,
        img: slides.asia.img,
        countries: slides.asia.countries,
      };

      return continent;
    }

    if (urlTitleId === "africa") {
      const continent = {
        title: slides.africa.title,
        intro: slides.africa.intro,
        img: slides.africa.img,
        countries: slides.africa.countries,
      };

      return continent;
    }

    if (urlTitleId === "europa") {
      const continent = {
        title: slides.europa.title,
        intro: slides.europa.intro,
        img: slides.europa.img,
        countries: slides.europa.countries,
      };

      return continent;
    }

    if (urlTitleId === "oceania") {
      const continent = {
        title: slides.oceania.title,
        intro: slides.oceania.intro,
        img: slides.oceania.img,
        countries: slides.oceania.countries,
      };

      return continent;
    }
  }

  const selectedContinent = getCountry();

  return {
    props: {
      selectedContinent,
    },
  };
};
