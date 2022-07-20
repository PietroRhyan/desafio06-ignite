import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Box, Image, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

export function Slider() {
  const slides = [
    { titleId: "america-do-norte", title: "América do Norte", subtitle: "Turismo, morada e/ou Trabalho? A América do Norte pode ser para você.", img: "/images/northAmerica.jpg" },
    { titleId: "america-central", title: "América Central", subtitle: "Venha curtir nas ilhas do Caribe.", img: "/images/centralAmerica.jpg" },
    { titleId: "america-do-sul", title: "América do Sul", subtitle: "Diversidade cultural e diversão para todos os gostos.", img: "/images/southAmerica.jpg" },
    { titleId: "asia", title: "Ásia", subtitle: "O maior continente do mundo.", img: "/images/asia.jpg" },
    { titleId: "africa", title: "África", subtitle: "Terra natal do homo sapiens.", img: "/images/africa.jpg" },
    { titleId: "europa", title: "Europa", subtitle: "O continente mais antigo.", img: "/images/europe.jpg" },
    { titleId: "oceania", title: "Oceania", subtitle: "Um dos melhores continentes para viver.", img: "/images/oceania.jpg" },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      tag="section"
      wrapperTag="ul"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.title} tag="li" style={{ listStyle: "none" }}>
          <Link href={`/continents/${slide.titleId}`} >
            <Box position="relative" cursor='pointer'>
              <Image
                src={slide.img}
                alt={slide.title}
                h={{base: '375px', md: '450px'}}
                w="100%"
                filter="brightness(0.4)"
                objectFit="cover"
                objectPosition="center"
              />
              <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -35%)"
                display='flex'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                gap='4'
              >
                <Heading fontSize={{base: '2xl', md: '3xl', lg: '5xl'}} textAlign='center' fontWeight="bold" color="gray.100">
                  {slide.title}
                </Heading>
                <Text fontSize={{base: 'sm', md: 'md', lg: '2xl'}} fontWeight='bold' color='gray.100' textAlign='center'>
                  {slide.subtitle}
                </Text>
              </Box>
            </Box>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
