import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Box, Image, Heading, Text } from "@chakra-ui/react";

export function Slider() {
  const slides = [
    { title: "América do Norte", subtitle: "Turismo, morada e/ou Trabalho? A América do Norte pode ser para você.", img: "/images/northAmerica.jpg" },
    { title: "América Central", subtitle: "Venha curtir nas ilhas do Caribe.", img: "/images/centralAmerica.jpg" },
    { title: "América do Sul", subtitle: "Diversidade cultural e diversão para todos os gostos.", img: "/images/southAmerica.jpg" },
    { title: "Ásia", subtitle: "O maior continente do mundo.", img: "/images/asia.jpg" },
    { title: "África", subtitle: "Terra natal do homo sapiens.", img: "/images/africa.jpg" },
    { title: "Europa", subtitle: "O continente mais antigo.", img: "/images/europe.jpg" },
    { title: "Oceania", subtitle: "Um dos melhores continentes para viver.", img: "/images/oceania.jpg" },
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
          <Box position="relative">
            <Image
              src={slide.img}
              alt={slide.title}
              h="450px"
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
              <Heading fontSize="5xl" fontWeight="bold" color="gray.100">
                {slide.title}
              </Heading>
              <Text fontSize='2xl' fontWeight='bold' color='gray.100' textAlign='center'>
                {slide.subtitle}
              </Text>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
