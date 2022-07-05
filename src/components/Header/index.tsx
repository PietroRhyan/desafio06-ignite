import {
  Flex,
  Image,
} from '@chakra-ui/react'

export function Header() {
  return (
    <Flex 
      w='100%'
      p='5'
      align='center'
      justifyContent='center'
      
    >
      <Image src='images/logo.svg'/>
    </Flex>
  )
}