import React from "react";
import Link from "next/link";
import Image from "next/image"
import { SimpleGrid, Center, Box, AspectRatio, Text, Stack, } from "@chakra-ui/react";

export default function CardAccordion({ names }) {
  return (
    <Center alignContent w='full' m='auto' mt={4}>
      <SimpleGrid columns={[2, 2]}>
        {names.map((val, data) => {
          let url = '/cronologias-invisible';
          val.imagenDeLaArtista === ''? url= url: url= val.imagenDeLaArtista;
          return (
            <Link key={data} href={`/search-artist/${val.id}`} as={`/search-artist/${val.id}`}>
              <a>
                <Box key={data} mr={4} mb={4}>
                  <AspectRatio 
                    ratio={1 / 1}
                    w={{ base: "8.6rem", md: "9.75rem", lg: "9.75rem", xl: "16.8rem"}}
                    h={{ base: "8.6rem", md: "9.75rem", lg: "9.75rem", xl: "10rem"}}
                  >
                    <Image src={url} alt={val.imagenDeLaArtista} layout="fill" objectFit='cover'/>
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

