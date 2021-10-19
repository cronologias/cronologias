import React from "react";
import { SimpleGrid, Center, Box, AspectRatio, Image, Text, Stack, } from "@chakra-ui/react";

function Card({ names }) {
  return (
    <Box minWidth="156px" margin={2} key={names.id}>
      <AspectRatio ratio={1 / 1}>
        <Image minWidth="156px" src={names.imagenDeLaArtista} alt="artist image" />
      </AspectRatio>
      <Stack align={{ base: "center", md: "stretch" }} textAlign={{ base: "center", md: "left" }} mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
        <Text fontWeight="bold" fontSize="18px" textTransform="uppercase" color="#000000">
          {names.nombreDeLaAutora}
        </Text>
      </Stack>
    </Box>
  );
}

function CardAccordion({ names }) {
  return (
    <Center alignContent w="full" m="auto" mt={4}>
      <SimpleGrid columns={[2, 2]}>
        {names.map((val, data) => {
          return (
            <Box key={data} mr={4} mb={4}>
              <AspectRatio 
                ratio={1 / 1}
                w={{ base: "8.6rem", md: "9.75rem", lg: "9.75rem", xl: "16.8rem"}}
                h={{ base: "8.6rem", md: "9.75rem", lg: "9.75rem", xl: "10rem"}}
              >
                <Image src={val.imagenDeLaArtista} alt="artist image"/>
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