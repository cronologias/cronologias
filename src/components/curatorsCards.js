import Link from "next/link";
import {Text, Heading, Box, Flex, HStack,} from '@chakra-ui/react';
import { buildUrl } from 'cloudinary-build-url';
import Image from 'next/image'

function CuratorsCards(props) {
    let imgurl = ''
    return (
    <>
    <Flex
        alignItems='start'
        flexDir={{ base: 'column', md: 'row' }} 
        m='auto'
        w={{ base: '20rem', '2sm': '24rem' , md: '48rem', lg: '60rem', xl: '75rem' }}
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
        spacing={{ base:'0.700rem', md:'1rem', lg:'1.5rem' }}
        alignItems='normal'
        mb={8}>
            {props.curators.map((element, index) => (
                imgurl = buildUrl(element.imagenDeLaCuradora, {
                    cloud: {
                        cloudName: 'cronologias-invisible',
                    },
                    transformations: {
                        width:'384',
                        quality:'75',
                    }
                }),
                <Box
                key={`curators-card-${index}`}
                w={{base:'9.75rem', '2sm': '11.75rem', md:'15rem', lg:'24rem'}}
                >
                    <Link
                    href={`/curator-bio/${element.id}`} as={`/curator-bio/${element.id}`}
                    >
                        <a>
                            <Box 
                            w="100%"
                            h={{base:"14.875rem", md:"20.125rem", lg:"240px"}}
                            position='relative'
                            >
                            <Image 
                                mr='0'
                                src={imgurl} 
                                display="inline-block" 
                                layout='fill'
                                objectFit="cover"
                                alt={element.nombreDeLaCuradora} 
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
                            mb={1}
                            fontWeight='bold'
                            >
                                {element.nombreDeLaCuradora} 
                            </Heading>
                            <Text
                            fontSize={{ base:'1rem'}}
                            fontFamily='body'
                            fontWeight={300}
                            >
                                {element.breveDescripcionDeLaCuradora} 
                            </Text>
                        </a>
                    </Link>
                </Box>
                
            ))}
        </HStack>
    </Flex>
    </>
    )
}

export default CuratorsCards