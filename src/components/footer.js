import React from 'react'
import Link from 'next/link';
import {Box, Center} from '@chakra-ui/react'
import logo from '../../public/logoNaranja.svg'
import Image from 'next/image'
function Footer(){
    return (
      <>
        <Box
          bg='brand.primaryBlack'
          w={'100%'}
          p={9}
        >
          <Center>
            <Link href='/' >
              <a>
                <Box w={{ base: '100px', md: '130px', lg: '150px' }} h='100px' position="relative">
                <Image 
                  layout="fill"
                  src={logo} 
                  alt='Cronologias de lo Invisible' />
                  </Box>
              </a>
            </Link>
          </Center> 
        </Box>
      </>
    )
}

export default Footer