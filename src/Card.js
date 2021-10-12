import React from "react";
import {
  Box,
  AspectRatio,
  Image,
  Text,
  Stack
} from "@chakra-ui/react";

function Card(props) {
  const { full_name, description } = props;

  return (
    <Box minWidth="156px" margin={2}>
      <AspectRatio ratio={1 / 1}>
        <Image
          minWidth="156px"
          src="https://ibb.co/vxdhByy"
          alt="artist image"

          /*
            Image link:
            https://ibb.co/vxdhByy
          */
        />
      </AspectRatio>
      <Stack
        align={{ base: "center", md: "stretch" }}
        textAlign={{ base: "center", md: "left" }}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
      >
        <Text
          fontWeight="bold"
          fontSize="18px"
          textAlign="center"
          textTransform="uppercase"
          color="#000000"
        >
          {full_name}
        </Text>
        <Text color="#000000">
          {description}
        </Text>
      </Stack>
    </Box>
  );
}

export default Card;