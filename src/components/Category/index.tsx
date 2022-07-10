import {
  Flex,
  Image,
  Text,
} from '@chakra-ui/react'

interface CategoryProps {
  image: string,
  title: string,
}

export function Category({ image, title }: CategoryProps) {
  return (
    <Flex
      flexDirection='column'
      align='center'
      justifyContent='center'
      gap='6'
      cursor='pointer'
      w='145px'
    >
      <Image 
        src={image}
        w='85px'
      />
      <Text
        fontSize='2xl'
        color='gray.900'
        fontWeight='semibold'
      >
        {title}
      </Text>
    </Flex>
  )
}