import {
  Flex,
  Stack,
  Heading,
  Text,
  Image,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";

export function BannerIndex() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      h={{ base: "auto", md: "335px" }}
      px={{ base: "4", md: "140px" }}
      py={{ base: "7", md: "80px" }}
      bg="url('images/background.svg')"
      align="center"
      justifyContent="space-between"
      mb={{ base: "9", md: "80px" }}
    >
      <Stack direction="column" spacing="5" w="450px">
        <Heading
          flexWrap="wrap"
          color="gray.100"
          w={{ base: "235px", md: "auto" }}
          fontSize={{ base: "xl", md: "4xl" }}
          fontWeight="medium"
        >
          5 Continentes, infinitas possibilidades.
        </Heading>

        <Text
          flexWrap="wrap"
          color="gray.500"
          fontSize={{ base: "sm", md: "xl" }}
          fontWeight="normal"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Stack>

      {isWideVersion && (
        <Box mt="100px">
          <Image
            src="images/airplane.svg"
            transform="rotate(3deg)"
            minW="140px"
          />
        </Box>
      )}
    </Flex>
  );
}
