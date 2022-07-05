import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {     
      '900': '#47585B',           
      '500': '#DADADA',      
      '100': '#F5F8FA',     
    },
    yellow: {
      '500': '#FFBA08',
    },
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Poppins, sans-serif',
  },
  components: {
    Divider: {
      colorScheme: 'gray.900' 
    }
  },
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'gray.900',

        '.container': {
          mx: '140px',
        }
      }
    }
  }
})