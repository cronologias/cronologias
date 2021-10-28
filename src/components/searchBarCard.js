import React from "react";
import Link from "next/link";
import {
    Box,
    AspectRatio,
    Image,
    Text,
    Stack,
} from "@chakra-ui/react";

export default function SearchBarCard({ names }) {
    return (
        <Link href={`/search-artist/${names.id}`} as={`/search-artist/${names.id}`}>
            <a>
                <Box key={names} mb={4}>
                    <AspectRatio
                        ratio={1 / 1}
                        w={{ base: "8.6rem", md: "9.75rem", lg: "9.75rem", xl: "16.8rem" }}
                        h={{ base: "8.6rem", md: "9.75rem", lg: "9.75rem", xl: "10rem" }}
                    >
                    <Image
                        src={names.imagenDeLaArtista}
                        alt={names.imagenDeLaArtista}
                    />
                    </AspectRatio>
                    <Stack
                        align={{ base: "center", md: "stretch" }}
                        mb={8}
                        w={{ base: "8.6rem", md: "9.75rem", lg: "9.75rem", xl: "16.8rem" }}
                    >
                        <Text
                            fontWeight={300}
                            fontFamily="heading"
                            color="brand.primaryBlack"
                        >
                            {names.nombreDeLaAutora}
                        </Text>
                    </Stack>
                </Box>
            </a>
        </Link>
    );
}
