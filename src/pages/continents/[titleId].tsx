import { GetStaticProps, GetStaticPaths } from "next";

import { Box, Flex, Heading, Image, Text, Grid, GridItem } from "@chakra-ui/react";
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
      <Header hasBackButton />

      <Box w="100%" h={{base: '375px', md: '500px'}} position="relative">
        <Image
          src={selectedContinent.img}
          w="100%"
          h={{base: '375px', md: "500px"}}
          objectFit="cover"
          objectPosition="center"
          filter="brightness(0.6)"
        />
        <Heading
          position="absolute"
          left={{base: '50%', md: '140px'}}
          bottom={{base: '50%', md: "60px"}}
          transform={{base: 'translate(-50%, -50%)', md: 'none'}}
          textAlign='center'
          fontSize={{base: '3xl', md: '5xl'}}
          fontWeight="bold"
          color="gray.100"
        >
          {selectedContinent.title}
        </Heading>
      </Box>

      <Box className="container">
        <Flex flexDirection={{base: 'column', lg: 'row'}} alignItems={{base: 'center', lg: 'normal'}} w='100%' my={{base: '6', md: '80px'}} gap={{base: '4', lg: 'auto'}} justifyContent='space-between'>
          <Box w={{base: '100%', lg: '600px'}}>
            <Text fontWeight='normal' fontSize={{base: 'sm', md: '2xl'}} color='gray.900' textAlign='justify'>
              {selectedContinent.intro}
            </Text>
          </Box>

          <Flex alignItems='center' justifyContent={{base: 'center', md: 'flex-end'}} gap='12'>
            <ContinentInfo value={50} title='países' />
            <ContinentInfo value={60} title='línguas' />
            <ContinentInfo value={27} title='cidades +100' hasTooltip />
          </Flex>
        </Flex>

        <Heading fontSize='4xl' fontWeight='medium'>Cidades +100</Heading>
        <Grid mt='40px' templateColumns='repeat(4, 1fr)' gap={4} >    
          {selectedContinent.countries.map((country) => (
            <GridItem key={country.city} >
              <Countries  image={country.country_img} name={country.country_name} city={country.city} icon={country.country_icon}/>
            </GridItem>
          ))}
        </Grid>
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
        { country_img: "/images/cities/ottawa.jpg", country_name: "Canadá", city: "Ottawa", country_icon: "/icons/canada.png"},
        { country_img: "/images/cities/toronto.jpg", country_name: "Canadá", city: "Toronto", country_icon: "/icons/canada.png"},
        { country_img: "/images/cities/lasVegas.jpg", country_name: "Estados Unidos", city: "Las Vegas", country_icon: "/icons/us.png"},
        { country_img: "/images/cities/sanFrancisco.jpg", country_name: "Estados Unidos", city: "San Francisco", country_icon: "/icons/us.png"},
        { country_img: "/images/cities/guanajuato.jpg", country_name: "México", city: "Guanajuato", country_icon: "/icons/mexico.png"},
      ],
    },

    americaCentral: {
      title: "América Central",
      intro: "",
      img: "/images/centralAmerica.jpg",
      countries: [
        { country_img: "/images/cities/sanJose.jpg", country_name: "Costa Rica", city: "San Jose", country_icon: "/icons/costa-rica.png" },
        { country_img: "/images/cities/sanPedroSula.jpg", country_name: "Honduras", city: "San Pedro Sula", country_icon: "/icons/honduras.png" },
      ],
    },

    americaSul: {
      title: "América do Sul",
      intro: "",
      img: "/images/southAmerica.jpg",
      countries: [
        { country_img: "/images/cities/rio.jpg", country_name: "Brasil", city: "Rio de Janeiro", country_icon: "/icons/brazil.png" },
        { country_img: "/images/cities/buenos.jpg", country_name: "Argentina", city: "Buenos Aires", country_icon: "/icons/argentina.png" },
      ],
    },

    asia: {
      title: "Ásia",
      intro: "",
      img: "/images/asia.jpg",
      countries: [
        { country_img: "/images/cities/singapore.jpg", country_name: "Singapura", city: "Singapura", country_icon: "/icons/singapore.png" },
        { country_img: "/images/cities/tokio.jpg", country_name: "Japão", city: "Tokio", country_icon: "/icons/japan.png" },
      ],
    },

    africa: {
      title: "Africa",
      intro: "",
      img: "/images/africa.jpg",
      countries: [
        { country_img: "/images/cities/cairo.jpg", country_name: "Egito", city: "Cairo", country_icon: "/icons/egypt.png" },
        { country_img: "/images/cities/lagos.jpg", country_name: "Nigéria", city: "Lagos", country_icon: "/icons/nigeria.png" },
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
