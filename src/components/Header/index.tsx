import { Flex, Box, Image } from "@chakra-ui/react";
import { ChevronLeftIcon } from '@chakra-ui/icons'
import Link from "next/link";

type HeaderProps = {
  hasBackButton?: boolean;
};

export function Header({ hasBackButton }: HeaderProps) {
  return (
    <Flex w="100%" py="5" px={{base: '4', md: '140px'}} alignItems='center'>
      { hasBackButton && (
        <Link href='/'>
          <ChevronLeftIcon boxSize={{base: '16px', md: '32px'}} color='gray.900' cursor='pointer' />
        </Link>
      )}
      <Box mx='auto'>
        <Image src="/images/logo.svg" w={{ base: '80px' , md: '150px'}} />
      </Box>
    </Flex>
  );
}
