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
                <HStack spacing="0.5rem">
                    {props.mobleSlides.map((slide, sid) => (
                        <LinkBox>
                            <Box 
                            key={`slide-card-${sid}`}  
                            w={60} 
                            h={48}
                            borderBottom="4px" 
                            borderBottomColor="brand.primaryOrange" 
                            >
                                <Image 
                                src={slide.img} 
                                objectFit="cover" 
                                w="100%"
                                h="100%"
                                />
                                <Heading 
                                as="h3" 
                                fontSize="1rem"
                                color="brand.baseColor" 
                                position="absolute" 
                                zIndex="2"
                                bottom="1"
                                pb={5}
                                pt={5}
                                bg="brand.primaryBlack"
                                textAlign="center"
                                width="full"
                                >
                                    <LinkOverlay 
                                    href="#"
                                    >
                                        {slide.title}
                                    </LinkOverlay>
                                </Heading>
                                
                            </Box>
                        </LinkBox>
                    ))}
                </HStack>
            </Flex>
        </Center>
    )
}

export default MobileSlider;