import {
    LinkBox,
    Text,
    Image,
    Heading,
    LinkOverlay,
    Box,
    Flex,
    Center,
    HStack,
} from "@chakra-ui/react"

function CuratorsCards(props) {
    return (
        <Center>
            <Flex
                    alignItems="start"
            >
                <HStack 
                spacing={{ base:"1rem", md:"2rem", lg:"2.25rem" }}
                alignItems="normal"
                mb={8}
                >
                    {props.curators.map((element, id) => (
                        <LinkBox
                        key={`curators-card-${id}`}
                        w={{base:"9.75rem", md:"15rem",/*  lg:"22.188rem" */}}
                        >
                            <Box 
                            w="full"
                            h={{base:"14.875rem", md:"20.125rem", /* lg:"27.313rem"  */}}
                            >
                            <Image 
                                src={element.enlaceDeLaImagen} 
                                display="inline-block" 
                                w="100%" 
                                h="100%"
                                objectFit={{base:"cover",lg:"cover" }}
                                alt="Sussy Vargas Alvarado" 
                                pb="7px"
                                />
                            </Box>
                            <Heading
                            as="h3"
                            href="#" 
                            textStyle="body"
                            fontSize={{ base:"1.125rem"}}
                            fontWeight="bold"
                            fontFamily="body"
                            mb={4}
                            >
                                <LinkOverlay 
                                href="#"
                                >
                                    {element.nombreDeLaCuradora} 
                                </LinkOverlay>
                            </Heading>
                            <Text
                            fontSize={{ base:"1rem"}}
                            fontFamily="body"
                            fontWeight={300}
                            >
                                {element.breveDescripcionDeLaCuradora} 
                            </Text>
                        </LinkBox>
                    ))}
                </HStack>
            </Flex>
        </Center>
    )
}

export default CuratorsCards