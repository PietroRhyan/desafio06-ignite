import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'

type CountriesProps = {
  image: string,
  name: string,
  city: string,
  icon: string,
}

export function Countries({ image, name, city, icon }: CountriesProps) {
  return (
    <Flex minW='200px' flexDirection='column' borderRadius='lg' >
      <Box bg='gray.900' w='100%' h='173x'>
        <Image src={image} />
      </Box>

      <Flex>
        <Flex>
          <Heading>{city}</Heading>
          <Text>{name}</Text>
        </Flex>

        <Image src={icon} />
      </Flex>
    </Flex>
  )
}