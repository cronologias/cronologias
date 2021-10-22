import React from "react";
import Link from "next/link";
//import  { useRouter } from 'next/router'
import { SimpleGrid, Center, Box, AspectRatio, Image, Text, Stack, } from "@chakra-ui/react";

function Card({ names }) {
  //console.log('viey', names)
  //const router = useRouter()
  return (
    <Link href={`/searchArtist/${names.id}`} as={`/searchArtist/${names.id}`}>
      <a>
        <Box key={names} mb={4}>
          <AspectRatio 
            ratio={1 / 1}
            w={{ base: "8.6rem", md: "9.75rem", lg: "9.75rem", xl: "16.8rem"}}
            h={{ base: "8.6rem", md: "9.75rem", lg: "9.75rem", xl: "10rem"}}
          >
            <Image src={names.imagenDeLaArtista} alt={names.imagenDeLaArtista}/>
          </AspectRatio>
          <Stack 
            align={{ base: "center", md: "stretch" }}
            mb={8}
            w={{ base: "8.6rem", md: "9.75rem", lg: "9.75rem", xl: "16.8rem"}}
          >
            <Text 
            fontWeight={300} 
            fontFamily="heading"
            color="brand.primaryBlack">
              {names.nombreDeLaAutora}
            </Text>
          </Stack>
        </Box>   
      </a>
    </Link>
  );
}

function CardAccordion({ names }) {
  return (
    <Center alignContent w="full" m="auto" mt={4}>
      <SimpleGrid columns={[2, 2]}>
        {names.map((val, data) => {
          return (
            <Link href={'searchArtist/[id]'} as={`/searchArtist/${names.id}`}>
              <a>
                <Box key={data} mr={4} mb={4}>
                  <AspectRatio 
                    ratio={1 / 1}
                    w={{ base: "8.6rem", md: "9.75rem", lg: "9.75rem", xl: "16.8rem"}}
                    h={{ base: "8.6rem", md: "9.75rem", lg: "9.75rem", xl: "10rem"}}
                  >
                    <Image src={val.imagenDeLaArtista} alt={val.imagenDeLaArtista}/>
                  </AspectRatio>
                  <Stack 
                    align={{ base: "center", md: "stretch" }}
                    w={{ base: "8.6rem", md: "9.75rem", lg: "9.75rem", xl: "16.8rem"}}
                  >
                    <Text fontWeight="bold" color="brand.primaryBlack">
                      {val.nombreDeLaAutora}
                    </Text>
                  </Stack>
                </Box>
              </a>
            </Link>
          )
        })}
      </SimpleGrid>
    </Center>
  );
}

export {
  Card,
  CardAccordion,
}
