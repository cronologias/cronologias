import React from 'react'
import Link from "next/link";
import Image from "next/image"
import {
  Box,
  HStack,
  Center,
} from "@chakra-ui/react"

function Galery(props) {
  let url = '/cronologias-invisible';
  return (
    <> 
      <Box mb={{ base: "2rem", md:"2.25rem", lg:"2.5rem"}}>
        {props.images.map((worksImg, index) => (
          url = '/cronologias-invisible',
          worksImg.imagenDeLaObraDeLaArtista ===""? url= url: url = worksImg.imagenDeLaObraDeLaArtista,
          index % 2 === 0 ?
            <Center 
                key={index} 
              >
              <HStack 
                spacing={ {base: 4, md: 6, lg: 8} }
                mt={ { base: 5, lg: 8 }} 
              >
                <Box w={ { base: "11.5rem", md: "28rem", lg: "40rem", xl: "53rem"} }
                        h={ {base: "16rem", md: "28rem", lg: "30rem"} } position='relative'>
                  <Link href="/">
                    <a>
                      <Image 
                        layout="fill"
                        objectFit="cover" 
                        src={url}
                        alt="Galeria del Artista" />
                    </a>
                  </Link>
                </Box>
                <Box bg="brand.primaryOrange"
                  w={ {base: "4rem",md: "15rem", lg: "14rem", xl: "16rem"} }
                  h={ { base: "16rem", md: "28rem", lg: "30rem" }} >
                </Box>
              </HStack>
            </Center> :
            <Center key={index} >
              <HStack 
                spacing={{ base: 4, md: 6, lg: 8 }}
                mt={{ base: 5, lg: 8 }} 
              >
                <Box 
                  bg="brand.primaryBlack"
                  w={{ base: "4rem", md: "15rem", lg: "14rem", xl: "16rem" }}
                  h={{ base: "16rem", md: "28rem", lg: "30rem" }} >
                </Box>
                <Box w={ { base: "11.5rem", md: "28rem", lg: "40rem", xl: "53rem"} }
                        h={ {base: "16rem", md: "28rem", lg: "30rem"} } position='relative'>
                  <Link href="/">
                    <a>
                      <Image 
                        layout='fill'
                        objectFit="cover" 
                        src={url}
                        alt="Galeria del Artista" />
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