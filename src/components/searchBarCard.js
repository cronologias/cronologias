import React from "react";
import Link from "next/link";
import Image from "next/image"
import {
    Box,
    AspectRatio,
    Text,
    Stack,
} from "@chakra-ui/react";

export default function SearchBarCard({ names }) {
    let url =  '/cronologias-invisible'
    names.imagenDeLaArtista ===""? url= url: url = names.imagenDeLaArtista
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
                        src={url}
                        alt={names.imagenDeLaArtista}
                        layout='fill'
                        objectFit='cover'
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
