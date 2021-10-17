import React from "react";
import {Box, AspectRatio, Image, Text, Stack, } from "@chakra-ui/react";

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

export default Card;