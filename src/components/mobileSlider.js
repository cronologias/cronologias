import {
    Box,
    Flex,
    HStack,
    Heading,
    Center,
    Image,
    LinkBox, 
    LinkOverlay,
} from "@chakra-ui/react"

function MobileSlider(props) {
    return(
        <Center>
            <Flex
            overflow="scroll"
            css={{
                "&::-webkit-scrollbar": {
                display: "none",
                },
            }}
            >
                <HStack spacing={{ base:"0.5rem", md:"0.6rem", lg:"2.438rem" }}>
                    {props.mobleSlides.map((slide, sid) => (
                        <LinkBox>
                            <Box 
                            key={`slide-card-${sid}`}  
                            w={{ base:"14.938rem", md:"15.5rem", lg:"18.375rem" }}
                            h={{ base:"13.75rem", md:"14rem", lg:"16.875rem" }}
                            borderBottom="4px" 
                            borderBottomColor="brand.primaryOrange" 
                            >
                                <Image 
                                src={slide.img} 
                                objectFit="cover" 
                                w="100%"
                                h="100%"
                                />
                                <Box 
                                bg="linear-gradient(180deg, rgba(0, 0, 0, 0) 44.5%, rgba(0, 0, 0, 0.3) 60.73%, rgba(0, 0, 0, 0.55) 80.85%, rgba(0, 0, 0, 0.7) 103.68%, #000000 120.75%)"
                                position="absolute" 
                                zIndex="2"
                                bottom="1"
                                w="full"
                                h="full"
                                >
                                    <Heading 
                                    position="absolute"
                                    bottom="1"
                                    as="h3" 
                                    w="full"
                                    fontSize="1rem"
                                    color="brand.baseColor" 
                                    pb={5}
                                    pt={5}
                                    textAlign="center"
                                    fontFamily="body"
                                    >
                                        <LinkOverlay 
                                        href="#"
                                        >
                                            {slide.title}
                                        </LinkOverlay>
                                    </Heading>
                                </Box>

                                
                            </Box>
                        </LinkBox>
                    ))}
                </HStack>
            </Flex>
        </Center>
    )
}

export default MobileSlider;