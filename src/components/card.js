import React from "react";
import { SimpleGrid, Container, Box, AspectRatio, Image, Text, Stack, } from "@chakra-ui/react";

function Card({ names }) {
  return (
    <Container alignContent minW="328px" centerContent>
      <SimpleGrid columns={[2, 2]}>
        {names.map((val, data) => {
          return (
            <Box minWidth="156px" margin={2} key={data}>
              <AspectRatio ratio={1 / 1}>
                <Image minWidth="156px" src={val.imagenDeLaArtista} alt="artist image"/>
              </AspectRatio>
              <Stack align={{ base: "center", md: "stretch" }} textAlign={{ base: "center", md: "left" }} mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                <Text fontWeight="bold" fontSize="18px" textTransform="uppercase" color="#000000">
                  {val.nombreDeLaAutora}
                </Text>
              </Stack>
            </Box>
          )
        })}
      </SimpleGrid>
    </Container>
  );
}

export default Card;