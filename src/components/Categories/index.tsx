import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface CategoryProps {
  image?: string;
  title: string;
}

export function Categories({ image, title }: CategoryProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      {isWideVersion ? (
        <Flex
          flexDirection="column"
          align="center"
          justifyContent="center"
          gap="6"
          cursor="pointer"
          w="158px"
        >
          <Image src={image} w="85px" />
          <Text fontSize="2xl" color="gray.900" fontWeight="semibold">
            {title}
          </Text>
        </Flex>
      ) : (
        <Text fontSize="lg" color="gray.900" fontWeight="semibold">
          {title}
        </Text>
      )}
    </>
  );
}
