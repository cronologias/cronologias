import React from 'react'
import Link from 'next/link';
import {
  Box,
  Image,
  HStack,
  Center,
} from '@chakra-ui/react'

function Galery(props) {
  return (
    <> 
      <Box mb={{ base: '2rem', md:'2.25rem', lg:'2.5rem'}}>
        {props.images.map((worksImg, index) => (
          index % 2 === 0 ?
            <Center 
                key={index} 
              >
              <HStack 
                spacing={ {base: 4, md: 6, lg: 8} }
                mt={ { base: 5, lg: 8 }} 
              >
                <Box >
                  <Link href='/'>
                    <a>
                      <Image 
                        w={ { base: '11.5rem', md: '28rem', lg: '40rem', xl: '53rem'} }
                        h={ {base: '16rem', md: '28rem', lg: '30rem'} }
                        objectFit='cover' 
                        src={worksImg.imagenDeLaObraDeLaArtista}
                        alt='Galeria del Artista' />
                    </a>
                  </Link>
                </Box>
                <Box bg='brand.primaryOrange'
                  w={ {base: '4rem',md: '15rem', lg: '14rem', xl: '16rem'} }
                  h={ { base: '16rem', md: '28rem', lg: '30rem' }} >
                </Box>
              </HStack>
            </Center> :
            <Center key={index} >
              <HStack 
                spacing={{ base: 4, md: 6, lg: 8 }}
                mt={{ base: 5, lg: 8 }} 
              >
                <Box 
                  bg='brand.primaryBlack'
                  w={{ base: '4rem', md: '15rem', lg: '14rem', xl: '16rem' }}
                  h={{ base: '16rem', md: '28rem', lg: '30rem' }} >
                </Box>
                <Box >
                  <Link href='/'>
                    <a>
                      <Image 
                        w={ { base: '11.5rem', md: '28rem', lg: '40rem', xl: '53rem'} }
                        h={ {base: '16rem', md: '28rem', lg: '30rem'} }
                        objectFit='cover' 
                        src={worksImg.imagenDeLaObraDeLaArtista}
                        alt='Galeria del Artista' />
                    </a>
                  </Link>
                </Box>
              </HStack>
            </Center>
            ))
          }
      </Box>
    </>
  )
}
export default Galery