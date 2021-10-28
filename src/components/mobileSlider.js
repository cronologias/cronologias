import Link from "next/link";
import {
    Box,
    Flex,
    HStack,
    Heading,
    Center,
    Image,
    LinkBox, 
} from '@chakra-ui/react'

function MobileSlider(props) {
    return(
        <Center 
        mb={{ base: '2rem', md:'2.25rem', lg:'2.5rem'}}
        >
            <Flex
            overflow='scroll'
            css={{
                '&::-webkit-scrollbar': {
                display: 'none',
                },
            }}
            align='start'
            >
                <HStack 
                    w={{ base: "20rem", md: "48rem", lg: "60rem", xl: "75rem" }}
                    m="auto"
                    textAlign="start"
                    mb={4}
                    spacing={{ base:"0.5rem", md:"0.6rem", lg:"1.5rem" }}>
                    {props.mobleSlides.map((slide, sid) => (
                        <>
                            <Link href={`/exposition-museum/${slide.id}`} as={`/exposition-museum/${slide.id}`}>
                            <a>
                                <LinkBox key={`slide-card-${sid}`}>
                                <Box 
                                w={{ base:'14.938rem', md:'18rem', lg:'24rem' }}
                                h={{ base:'13.75rem', md:'14rem', lg:'16.875rem' }}
                                borderBottom='4px' 
                                borderBottomColor='brand.primaryOrange' 
                                >
                                    <Image 
                                    src={slide.enlaceDeLaImagen} 
                                    objectFit='cover' 
                                    w='100%'
                                    h='100%'
                                    />
                                        <Box 
                                            bg='linear-gradient(180deg, rgba(0, 0, 0, 0) 44.5%, rgba(0, 0, 0, 0.3) 60.73%, rgba(0, 0, 0, 0.55) 80.85%, rgba(0, 0, 0, 0.7) 103.68%, #000000 120.75%)'
                                            position='absolute' 
                                            zIndex='2'
                                            bottom='1'
                                            w='full'
                                            h='full'
                                        >
                                            <Heading 
                                            position='absolute'
                                            bottom='1'
                                            as='h3' 
                                            w='full'
                                            fontSize='1rem'
                                            color='brand.baseColor' 
                                            pb={5}
                                            pt={5}
                                            textAlign='center'
                                            fontFamily='body'
                                            > 
                                                {slide.tituloDeLaTarjeta}
                                            </Heading>
                                        </Box>
                                </Box>
                            </LinkBox>
                            </a>
                        </Link>
                        </>
                    ))}
                </HStack>
            </Flex>
        </Center>
    )
}

export default MobileSlider;