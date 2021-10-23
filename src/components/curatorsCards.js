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
} from '@chakra-ui/react'

function CuratorsCards(props) {
    return (
    <>
    <Flex
        alignItems='start'
        flexDir={{ base: 'column', md: 'row' }} 
        m='auto'
        w={{ base: '20rem', md: '48rem', lg: '60rem', xl: '75rem' }}
        justifyContent='space-between'
        mb={{ base: '2rem', md:'2.25rem', lg:'2.5rem'}}
    >
        <Box

            fontFamily='heading'
            fontSize={{ base: '1.25rem', md: '1.25rem', lg: '1.5rem' }}
            color='brand.primaryBlack'
            fontWeight={700}
        >
            <h2>Curadoras</h2>
        </Box>
        <HStack 
        spacing={{ base:'0.700rem', md:'1rem', lg:'2rem' }}
        alignItems='normal'
        mb={8}>
            {props.curators.map((element, id) => (
                <LinkBox
                key={`curators-card-${id}`}
                w={{base:'9.75rem', md:'15rem'}}
                >
                    <Box 
                    w='100%'
                    h={{base:'14.875rem', md:'20.125rem'}}
                    >
                    <Image 
                        mr='0'
                        src={element.enlaceDeLaImagen} 
                        display='inline-block' 
                        w='100%' 
                        h='100%'
                        objectFit={{base:'cover',lg:'cover' }}
                        alt='Sussy Vargas Alvarado' 
                        pb='7px'
                        />
                    </Box>
                    <Heading
                    as='h3'
                    href='#' 
                    textStyle='body'
                    fontSize={{ base:'1.125rem'}}
                    fontWeight={300}
                    fontFamily='body'
                    mb={3}
                    >
                        <LinkOverlay 
                        href='#'
                        >
                            {element.nombreDeLaCuradora} 
                        </LinkOverlay>
                    </Heading>
                    <Text
                    fontSize={{ base:'1rem'}}
                    fontFamily='body'
                    fontWeight={300}
                    >
                        {element.breveDescripcionDeLaCuradora} 
                    </Text>
                </LinkBox>
            ))}
        </HStack>
    </Flex>
    </>
    )
}

export default CuratorsCards