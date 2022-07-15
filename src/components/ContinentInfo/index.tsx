import { Box, Flex, Heading, Text, Tooltip } from '@chakra-ui/react'
import { InfoOutlineIcon } from '@chakra-ui/icons'

type ContinentInfoProps = {
  value: number,
  title: string,
  hasTooltip?: boolean,
}

export function ContinentInfo({ value, title, hasTooltip }: ContinentInfoProps) {
  return (
    <Flex direction='column' alignItems='center' justifyContent='center'>
      <Heading fontWeight='bold' fontSize='5xl' color='yellow.500'>{value}</Heading>
      
      <Box display='flex' alignItems='center' justifyContent='center' gap='1'>
        <Text fontWeight='bold' fontSize='2xl' display='inline'>{title}</Text>
        {hasTooltip && (
          <Tooltip label='Mais de cem cidades para você explorar!'>
            <InfoOutlineIcon />
          </Tooltip>
        )}
      </Box>
    </Flex>
  )
}