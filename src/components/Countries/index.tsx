import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

type CountriesProps = {
  image: string;
  name: string;
  city: string;
  icon: string;
};

export function Countries({ image, name, city, icon }: CountriesProps) {
  return (
    <Flex
      w="250px"
      flexDirection="column"
      borderRadius="md"
      overflow="hidden"
      cursor='pointer'
    >
      <Box bg="gray.900" w="100%" h="173x">
        <Image
          w="100%"
          h="173px"
          objectFit="cover"
          objectPosition="center"
          src={image}
        />
      </Box>

      <Flex
        w="100%"
        h="100px"
        alignItems="center"
        justifyContent="space-between"
        borderBottomRadius="md"
        px="24px"
        border="1px"
        borderColor="yellow.800"
        borderTop="none"
      >
        <Flex flexDirection="column" gap="12px">
          <Heading fontSize='xl' fontWeight='bold'>{city}</Heading>
          <Text fontSize='md' color='gray.700' fontWeight='medium' >{name}</Text>
        </Flex>

        <Image src={icon} boxSize="30px" />
      </Flex>
    </Flex>
  );
}
