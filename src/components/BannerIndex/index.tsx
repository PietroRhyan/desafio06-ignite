import {
  Flex,
  Stack,
  Heading,
  Text,
  Image,
  Box,
} from '@chakra-ui/react'

export function BannerIndex() {
  return (
    <Flex
      h='335px'
      px='140px'
      bg="url('images/background.svg')"
      align='center'
      justifyContent='space-between'
      mb='80px'
    >
      <Stack direction='column' spacing='5' w='450px'>
        <Heading flexWrap='wrap' color='gray.100' fontSize='4xl' fontWeight='medium'>
          5 Continentes, infinitas possibilidades.
        </Heading>

        <Text flexWrap='wrap' color='gray.500' fontSize='xl' fontWeight='normal'>
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Stack>

      <Box
        mt='100px'
      >
        <Image
          src='images/airplane.svg'
          transform="rotate(3deg)"
        />
      </Box>
    </Flex>
  )
}